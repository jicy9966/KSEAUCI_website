import React, { useEffect, useState } from "react";
import "./itemview.scss";
import { useParams, Link } from "react-router-dom";
import { itemList } from "../../../config/data";
import { NavBar, Footer, EmptyGrid } from "../../../components/components";

const ItemView = () =>
{
    const {id} = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        let item = itemList.find((item) => item.id === parseInt(id));
        if (item)
        {
            setItem(item);
        }
    }, [id]);

    return(
        <div className="page-wrap">
            <NavBar />
            {/*The Go Back Arrow*/}
            <Link className="go-back" to="/activity"> ← </Link>
            {item ? (
                <div className="item-wrap">
                    <header>
                        <p className="item-date">Date: {item.date}</p>
                        <h1>{item.title}</h1>
                        <div className="sub-categories">
                            {item.subCategory.map((category, i) => (<div key={i}>{category}</div>))}
                        </div>
                    </header>
                    <img src={item.cover} alt=" "></img>
                    <p className='item-desc'>{item.description}</p>
                </div>
            ) : (<EmptyGrid />)}
            <Footer />
        </div>);
};

export default ItemView;