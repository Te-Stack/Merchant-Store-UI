import "../index.css"

function Home() {
    return (
        <div className="first">
            <nav className="navbar navbar-light bg-primary " >
            <div className ="container-fluid">
                <a className ="navbar-brand text-white" href="#">Store made with <span>SOKO</span></a>
            </div>
            </nav>

            <nav className ="navbar navbar-expand-lg navbar-light bg-light">
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

            <div className="container">
                <div className="row">
                    <div className="col-3  p1">
                        <div>
                        <p className="current text-primary mt-4 ">Electronics(12)</p>
                        <p>Face Masks (3)</p>
                        <p>Fresh Food (8)</p>
                        <p>Grocery (6)</p>
                        <p>Homes (24)</p>
                        <p>Kids (9)</p>
                        </div>
                        <p className="text-primary "> View all categories &gt; </p>
                    </div>
                    <div className="col-6 p1">
                        <form className ="d-flex mb-2">
                            <input className ="form-control me-2" type="search" placeholder="Search for products..." aria-label="Search"/>
                            <button className ="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                        <h4 className="font-weight-bold mt-1 ">Electronics <span className="num bg-primary text-white font-weight-bold "> 12</span></h4>
                        <div className="container mt-2">
                            <div className="row">
                                <div className="col-3">
                                    <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550157/medicine-5103043_1920_rd7fuz.jpg" alt="facemask" />
                                    <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550116/chair-1840011_1920_wpeabc.jpg" alt="Chair" />
                                    <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550110/vegetable-juices-1725835_1920_booyes.jpg" alt="Carrot" />
                                    <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550101/cupboard-2160186_1920_a7wm6f.jpg" alt="cupboard" />
                                    <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550091/coffee-2700661_1920_hr73ch.jpg" alt="cunned-bean" />

                                </div>
                                <div className="col-7">
                                    <div className="middle">
                                        <div className="mid">
                                            <h6>Kids'2pk Cloth Face Masks </h6>
                                            <p>UGX 185,000</p>
                                        </div>
                                        <div className="mid">
                                            <h6>Norbury Scandinavian Wood Leg Ottoman </h6>
                                            <p>UGX 118,400</p>
                                        </div>
                                        <div className="mid">
                                            <h6>Baby-Cut Carrots -1lb - Good and Gather  </h6>
                                            <p>UGX 4,000</p>
                                        </div>
                                        <div className="mid">
                                            <h6>Metal Country Chalet Charm and wood Bench -Saracina Home </h6>
                                            <p>UGX 185,000</p>
                                        </div>
                                        <div className="mid">
                                            <h6>Alternative Protein Ground - 160z -Good and Gather </h6>
                                            <p>UGX 185,000</p>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                    <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                    <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                    <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                    <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="col-3">
                        <h4 className="font-weight-bold mt-1 ">Bags  <span className="num bg-primary text-white font-weight-bold "> 0</span></h4>
                            

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Home
