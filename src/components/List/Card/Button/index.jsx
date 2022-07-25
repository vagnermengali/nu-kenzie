import "./style.css"

function Button({filtered, filterAll}) {
    if(filtered === "Todos") {
        return(
            <>
            <button className="buttonSelect" onClick={() => filterAll("Todos")}>Todos</button>
            <button onClick={() => filterAll("Entrada")}>Entradas</button>
            <button onClick={() => filterAll("Despesa")}>Despesas</button>
            </>
        )
        }if(filtered === "Despesa") {
            return (
            <>
            <button onClick={() => filterAll("Todos")}>Todos</button>
            <button onClick={() => filterAll("Entrada")}>Entradas</button>
            <button className="buttonSelect" onClick={() => filterAll("Despesa")}>Despesas</button>
            </>
            )

        }if(filtered === "Entrada")
        return (
            <>
            <button onClick={() => filterAll("Todos")}>Todos</button>
            <button className="buttonSelect" onClick={() => filterAll("Entrada")}>Entradas</button>
            <button onClick={() => filterAll("Despesa")}>Despesas</button>
            </>    
        )

}

export default Button