import oeuf from "../assets/img/oeuf-removebg-preview.png"
import raisin from "../assets/img/raisin-removebg-preview.png"
import tasse from "../assets/img/tasse-removebg-preview.png"
import orange from "../assets/img/orange-removebg-preview.png"

export default function Section (){
    return(
        <div className="section" id="services">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="first_card">
                            <h2 className="few-bold text-center">transform your brand</h2>
                            <br />
                            <p>We are full-service creative agency specializingb in <br />
                            helping brands grow fast. Engage your clients through <br />
                            compelling visiuals that do most of marketing for you
                            </p>
                            <a className="a-link fw-bold">Learn more</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="second_card">
                            <img src={oeuf} alt="" className="w-75" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="third_card">
                             <img src={tasse} alt="" className="w-75" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="fourth_card">
                            <h2 className="few-bold">transform your brand</h2>
                            <br />
                            <p>We are full-service creative agency specializingb in <br />
                               helping brands grow fast. Engage your clients through <br />
                               compelling visiuals that do most of marketing for you
                            </p>
                            <a className="a-link-2 fw-bold">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="fifth_card d-flex flex-column">
                            <img src={raisin} alt="" className="w-75" />
                            <div className="text-1">
                                <h3 className="fw-bold">Graphic Design</h3>
                                <p>Great design makes yui memorable. We deliver <br /> artwork that underscores your brand message <br /> and captures potential clients' attention</p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="sixth_card d-flex flex-column">
                            <img src={orange} alt="" className="w-50" />
                            <div className="text">
                                <h3 className="fw-bold">Photography</h3>
                                <p>Increase your credibility by getting the most <br />stunning, high-quality photos that improve your <br /> business image </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

