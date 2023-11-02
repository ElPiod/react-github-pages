import { Row, Col } from "react-bootstrap"
import lait from "../assets/img/lait-removebg-preview.png"
import citron from "../assets/img/citron-removebg-preview.png"
import glace from "../assets/img/glace-removebg-preview.png"
import sucre from "../assets/img/sucre-removebg-preview.png"

export default function Section(){
    return(
        <div className="section_3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-md-3">
                    <div className="border_s3a">
                        <img src={lait} alt=""  className="img-fluid"/>
                    </div>
                    </div>
                    <div className="col-12 col-md-3">
                    <div className="border_s3b">
                        <img src={citron} alt="" className="img-fluid"/>
                    </div>
                    </div>
                    <div className="col-12 col-md-3">
                    <div className="border_s3c">
                        <img src={glace} alt="" className="img-fluid"/>
                    </div>
                    </div>
                    <div className="col-12 col-md-3">
                    <div className="border_s3d">
                        <img src={sucre} alt="" className="img-fluid w-50"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}