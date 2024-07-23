import React from "react";
import "./leader.scss";
import { structure, ksea_logo } from "../../../utils/images";

const Leadership = () =>
{
    return(
        <div className="struct-wrap">
            <img src={ksea_logo} alt="ksea logo" className="background-logo"/>
            <div className="title">The Leadership Structure</div>
            <div className="yellow-line" />
            <div className="struct">
                <img src={structure} alt="tree structure of ksea" className="struct-tree"/>
                <div className="demographics">
                    <div className="red-line" />
                    <div className="textbox">
                        <div>Group Demographics</div>
                        <ul>
                            <li>Undergraduate Students</li>
                            <li>Graduate Students</li>
                            <li>Post-doctoral Fellows</li>
                            <li>Early-Career Professionals</li>
                            <li>Established Professionals</li>
                        </ul>
                        <a href="https://www.ksea.org/committee" target="blank" className="yellow-btn">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leadership;