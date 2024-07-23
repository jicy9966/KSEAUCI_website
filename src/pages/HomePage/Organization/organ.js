import React from "react";
import "./organ.scss";
import { ksea_logo } from "../../../utils/images";

const Organization = () =>
{
    return(
        <div className="organ-wrap">
            <img src={ksea_logo} alt="ksea logo" className="back_logo"/>
            <div className="text-wrap">
                <div className="title">The KSEA Organization</div>
                <div className="yellow-line"/>
                <ul className="bullets">
                    <li> Established in 1971 as a non-profit organization</li>
                    <li> Over 10,000 registered members</li>
                    <li> 75+ Local Chapter & Branches</li>
                    <li> 30 Affiliated Professional Societies</li>
                    <li> 13 Technical Groups across the US</li>
                </ul>
                <a href="https://www.ksea.org/lcpc" target="blank" className="yellow-btn">Learn more</a>
            </div>
        </div>
    );
};

export default Organization;