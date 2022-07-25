import { useState } from "react"
import Card from "./Card"
import Button from "./Card/Button"
import NoCard from "../../../assets/NoCard.svg"
import "./style.css"

function List({listTransactions,setlistTransactions}) {
    const [filtered, setFiltered] = useState("Todos")
    function filterAll(item) {
        setFiltered(item)
    }
    function handleRemoveName(elemToRemove) {
        setlistTransactions((listTransactions) => listTransactions
        .filter((elem) => elem !== elemToRemove)
        )
    }

    return (
        <section className="list">
        <div className="headerList">
            <div >
                <p>Resumo financeiro</p>
            </div>
            <nav >
                <Button filtered={filtered} filterAll={filterAll}/>
            </nav>
            
        </div>
        <ul className="ulList">
            {listTransactions.length > 0 ? 
                <>
                {listTransactions.map((elem,index) => {
                    if(filtered === "Todos") {
                        return <Card listTransactions={elem} key={index} handleRemoveName={handleRemoveName} />
                    }else if(filtered === elem.type) {
                        return <Card listTransactions={elem} key={index} handleRemoveName={handleRemoveName} />
                    }else{
                        return null
                    }
                }
                )}
                </>
            :
                <>
                <h1 className="titleNoCard" >Você ainda não possui nenhum lançamento</h1>
                <img className="imgNoCard" src={NoCard} alt=""/>  
                </>
            }
        </ul>
    </section>
    )
}

export default List