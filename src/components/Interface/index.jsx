import image from "../../assets/image.svg"
import "./style.css"
import 'animate.css';

function Interface({Login}) {

    return (
        <main className="container">
            <div className="content">
                <div className="leftLogin">
                        <h1><span>Nu</span> Kenzie</h1>
                        <h2>Centralize o controle das suas finanças</h2>
                        <p>de forma rápida e segura</p>
                        <button onClick={Login}>Iniciar</button>
                </div>
                <div className="rightLogin">
                    <img src={image} alt="" />
                </div> 
                        
            </div>
        </main>
        )
}

export default Interface