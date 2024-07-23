import React from "react";
import "./member.scss";
import { blank_profile } from "../../utils/images";

const Member = ({photo, name_en, name_kr, position_en, position_kr, major}) =>
{
    return(
        <div className="member-card">
            <img src={photo ? photo : blank_profile} alt="member image" />
            <div className="info-wrap">
                <div className="name">
                    {name_en} <div className="black-line"/> {name_kr}
                </div>
                <div className="position">
                    {position_en} <div className="black-line"/> {position_kr}
                </div>
                <div className="major">{major}</div>
            </div>
        </div>
    );
};

export default Member;