import React from "react";
import "./front.scss";

const FrontTitle = () =>
{
    return(
        <div className="title-wrap">
            <div className="title">KSEA UC IRVINE</div>
            <div className="yellow-line"/>
            <div className="subtitle">
                <div>Promoting career development, networking, and service <br/>
                for Korean-American scientists & engineers in UCI</div>
            </div>
            <div className="buttons">
                <a href="https://www.ksea.org/" target="blank" className="yellow-btn">Learn more</a>
                <a href="https://linktr.ee/kseaucirvine" target="blank" className="white-btn">Join us</a>
            </div>
        </div>
    );
}

export default FrontTitle;