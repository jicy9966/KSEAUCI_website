import React from "react";
import "./item.scss";
import { Link } from 'react-router-dom';

const Item = (
    {
        item: {
            title,
            description,
            date,
            cover,
            category,
            id,
        },
    }) =>
{
    return(
        <div className="item-wrap">
            {/*Clicking on image to go to link {item}*/}
            <Link className="itemCover" to={`/activity/${id}`}>
                <img src={cover} alt=" " className="image"/>
            </Link>
            <text>{title}</text>
            <p className="itemDesc">{description}</p>
        </div>);
};

export default Item;