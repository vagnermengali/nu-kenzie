import { useState } from "react";
import TotalMoney from "../TotalMoney"

import "./style.css"


function Form({listTransactions, setlistTransactions}) {
    const [listDescription, setlistDescription] = useState("");
    const [listValue, setlistValue] = useState("");
    const [listStatus, setlistStatus] = useState("");
    function createCard() {
        return { 
            description: listDescription,
            value: Number(listValue),
            type: listStatus
        }
    }
    function addList() {
        setlistTransactions([createCard(),...listTransactions])
  }
    return (
        <section className="containerForm ">
            <form className="form" onSubmit={(event) => {
                event.preventDefault()
                addList()
            }}>
                <div className="divDescription">
                    <label className="labelDescription">Descrição</label>
                    <input className="inputDescription" 
                    type="text" 
                    placeholder="Digite aqui sua descrição" 
                    value={listDescription}
                    onChange={(event) => setlistDescription(event.target.value)}/>
                    <p>Ex: Compra de roupas</p>
                </div>
                <div className="divValue">
                    <div className="divContentOne">
                        <label className="labelValue" >Valor</label>
                        <input 
                        className="inputValue" 
                        type="number" 
                        placeholder="R$" 
                        value={listValue}
              
                        onChange={(event) => {
                            event.target.value = event.target.value.replace("-","")
                                .replace("+","")
                            setlistValue(event.target.value)
                        }
                        }
                        /> 
                    </div>
                    <div className="divContentTwo">
                    <label >Tipo de valor</label>
                    <select name="typeValue" id="typeValue" value={listStatus} onChange={(event) => setlistStatus(event.target.value)}>
                        <option >Selecione</option>
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Saída</option>
                    
                    </select>
                    </div>
                </div>
                <button type="submit" className="insertValue" onClick={(event) => {
                event.preventDefault()
                addList()
            }}>Inserir Valor</button>
            </form>
            {listTransactions.length > 0}
                <TotalMoney listTransactions={listTransactions}/>
        </section>
    )
}

export default Form