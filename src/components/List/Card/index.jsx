import { FaTrash } from "react-icons/fa";
import "./style.css"


function Card({listTransactions,handleRemoveName}) {
    if(listTransactions.type === "Despesa") {
        return (
            <li className="cardExit">
                <div className="cardContainer">
                <div className="cardTitle">
                    <h1>{listTransactions.description}</h1>
                </div>
            <div className="cardPrice">
                <p>-{listTransactions.value}</p>
                <button onClick={() => handleRemoveName(listTransactions)} ><FaTrash /></button>
            </div> 
            </div>
            <p>{listTransactions.type}</p>
        </li>
         )
    }else {
            return (
        <li className="cardEnter">
            <div className="cardContainer">
            <div className="cardTitle">
                <h1>{listTransactions.description}</h1>
            </div>
        <div className="cardPrice">
            <p>{listTransactions.value}</p>
            <button onClick={() => handleRemoveName(listTransactions)}><FaTrash /></button>
        </div> 
        </div>
        <p>{listTransactions.type}</p>
    </li>
     ) 
}
}

export default Card