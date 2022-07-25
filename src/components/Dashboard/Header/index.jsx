import "./style.css"

function Header({Logout}) {

    return (
        <header className="headerContainer">
            <div className="headerContent">
                <div>
                    <h1><span>Nu</span> Kenzie</h1>
                </div>
                <div className="btnContent">
                    <button className="btnLogout" onClick={Logout}>Inicio</button>
                </div>
            </div>
        </header>
    )
}

export default Header