import { Link } from "react-router-dom"
import "../index.css"

function Home() {
    return (
        <div className="first">
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
                        <h4 className="font-weight-bold mt-1 ">Electronics &nbsp;<span className="num bg-primary text-white font-weight-bold ">12</span></h4>
                        <div className="flex mt-2">
                            <div className="phase">
                                <div>
                                    <Link to="/products">
                                        <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550157/medicine-5103043_1920_rd7fuz.jpg" alt="facemask" />
                                    </Link>    
                                </div>
                                <div className="mid">
                                    <h6>Kids'2pk Cloth Face Masks </h6>
                                    <p>UGX 185,000</p>
                                </div>
                                <div>
                                <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                </div>
                            </div>
                            <div className="phase">
                                <div>
                                <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550116/chair-1840011_1920_wpeabc.jpg" alt="Chair" />
                                </div>
                                <div className="mid">
                                <h6>Norbury Scandinavian Wood Leg Ottoman </h6>
                                <p>UGX 118,400</p>
                                </div>
                                <div>
                                <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                </div>

                            </div>
                            <div className="phase">
                                <div>
                                 <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550110/vegetable-juices-1725835_1920_booyes.jpg" alt="Carrot" />
                                </div>
                                <div className="mid">
                                            <h6>Baby-Cut Carrots -1lb - Good and Gather  </h6>
                                            <p>UGX 4,000</p>
                                </div>
                                <div>
                                    <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                </div>
                            </div>
                            <div className="phase">
                                <div>
                                    <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550101/cupboard-2160186_1920_a7wm6f.jpg" alt="cupboard" />
                                </div>
                                    <div className="mid">
                                                <h6>Metal Country Chalet Charm and wood Bench -Saracina Home </h6>
                                                <p>UGX 185,000</p>
                                    </div>
                                <div>
                                    <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                </div>

                            </div>
                            <div className="phase">
                                <div>   
                                    <img  className="img mt-4" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617550091/coffee-2700661_1920_hr73ch.jpg" alt="cunned-bean" />
                                </div>
                                <div className="mid">
                                    <h6>Alternative Protein Ground - 160z -Good and Gather </h6>
                                    <p>UGX 185,000</p>
                                </div>
                                <div>
                                    <button className="btn btn-primary mt-5 mb-5"> + Add </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="font-weight-bold m-5">Bags &nbsp;  <span className="num bg-primary text-white font-weight-bold "> 0</span></h4>
                        <img className="img1 " src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1617624976/smiley-1635449_1280_l1ce6g.png" alt="stickers" />
                        <div className="mx-2">
                        <p className="mx-5"><strong>it's empty here</strong></p>
                        <p>Start shopping to add items to<br/> your bag</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
