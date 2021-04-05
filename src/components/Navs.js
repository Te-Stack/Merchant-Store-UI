import "../index.css"
import {Link} from "react-router-dom"


function Navs() {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary " >
            <div className ="container-fluid">
                <Link className ="navbar-brand text-white" to="">Store made with <span>SOKO</span></Link>
            </div>
            </nav>

            <nav className ="navbar navbar-expand-lg navbar-light bg-light target ">
                <div className="container-fluid">
                    <Link to="" className ="navbar-brand" > <i className =" text-mute fas fa-hotel icon"></i>  Target <br/> <span className="small">cham Towers, Plot 12 Nkruma Rd, Kampala, Ug </span></Link>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                    </button>
                    <div className ="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav shift ">
                        <Link to="#" className="nav-link" href=""> <i className ="fas fa-shopping-bag icon "></i> &nbsp;&nbsp;Bag </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link className ="nav-link" to=""> <i className ="far fa-user icon "></i>&nbsp;&nbsp;  Account </Link>
                    </div>
                    </div>
                </div>
            </nav> 

            
        </div>
    )
}

export default Navs
