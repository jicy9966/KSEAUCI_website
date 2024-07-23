import React from "react";
import "./geo.scss";
import { geo_map } from "../../../utils/images";

const Geography = () =>
{
    return(
        <div className="geo-wrap">
            <img src={geo_map} alt="map of ksea yg" className="map"/>
            <div className="title-box">
                <div className="title">
                    KSEA YG Groups<br/>
                    2024-2025
                </div>
                <a href="https://www.ksea.org/yg-g" target="blank" className="yellow-btn">Learn more</a>
            </div>
            <div className="background"/>
        </div>
    );
};

export default Geography;