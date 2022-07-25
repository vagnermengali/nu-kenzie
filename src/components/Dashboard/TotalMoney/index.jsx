import "./style.css"

function TotalMoney({listTransactions}) {
const totalMoney = listTransactions.reduce((acc,item) =>{
    if(item.type === "Entrada"){
        return acc + Number(item.value)
    }else{
        return acc - Number(item.value)
    }
},0);
const valueTotal = listTransactions.reduce((a, b) => {
    return   a + b.value
}, 0)    
if(valueTotal === 0 ) {
    return null
}else{
        return (
        <div className="containerValue">
            <div className="contentValue">
            <div className="valueTotal">
                <h1>Valor total:</h1>
                <h2>$ {totalMoney}</h2>
            </div>
            <p>O valor se refere ao saldo</p>
            </div>
        </div>
    )
}
}

export default TotalMoney

