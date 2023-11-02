import NavBar from "./NavBar";
import orange from "../assets/img/tranche-agrumes-orange-murs-isoles-blanc_146671-19260-removebg-preview.png"


export default function Header(){
    return(
        <div className="header" id="about">
            <div className="header_navbar">
                <NavBar/>
            </div>
            <div className="header_text">
                <h1 className="text-white text-center">WE ARE CREATIVES</h1>
            </div>
            <div className="img_orange text-center">
                <img src={orange} alt="Orange" className="img-fluid" />
            </div>
        </div>
    )
}