import React from "react";
import "./TimeGrid.scss";
import Item from "./Item/item";

const TimeGrid = ({ items }) =>
{
    return(
        <div className="timegrid-wrap">
             {items.map((item) => (<Item item={item}/>))}
        </div>
    );
};

export default TimeGrid;