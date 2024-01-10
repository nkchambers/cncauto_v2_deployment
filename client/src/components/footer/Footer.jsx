import "./Footer.css";
import LightsHome2 from "../../assets/home_img/LightsHome2.gif";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerImg">
                <img src= { LightsHome2 } alt="truck with active headlights" />
            </div>
            <div className="footerItems">
                {/* <a href="/OurStory">Our Story</a> */}
                <a href="https://autonewsonline.com/"  
                    target="_blank" 
                    rel="noreferrer">
                    AutoNews
                </a>
                <a href="/contact">Contact</a>
            </div>
            <div className="footerText">
                Copyright 2023 C&C Auto.
                <br/>
                All rights reserved.
            </div>
        </div>
    )
}

export default Footer