import "../index.css"

function Navs() {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary " >
            <div className ="container-fluid">
                <a className ="navbar-brand text-white" href="#">Store made with <span>SOKO</span></a>
            </div>
            </nav>

            <nav className ="navbar navbar-expand-lg navbar-light bg-light target ">
                <div className="container-fluid">
                    <a className ="navbar-brand" href="#"> <i className =" text-mute fas fa-hotel icon"></i>  Target <br/> <span className="small">cham Towers, Plot 12 Nkruma Rd, Kampala, Ug </span></a>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                    </button>
                    <div className ="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav shift ">
                        <a className="nav-link" href="#"> <i className ="fas fa-shopping-bag icon "></i> &nbsp;&nbsp;Bag </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a className ="nav-link" href="#"> <i className ="far fa-user icon "></i>&nbsp;&nbsp;  Account </a>
                    </div>
                    </div>
                </div>
            </nav> 

            
        </div>
    )
}

export default Navs
