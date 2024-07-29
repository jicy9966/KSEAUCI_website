import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { ksea_logo } from "../../utils/images";
import ScrollToTop from "../ScrollToTop";
import Popup from "reactjs-popup";
import { FaBars } from "react-icons/fa";

const NavBar = () =>
{
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900); //detect viewport type

    useEffect(() => 
    {
        const handleResize = () => 
        {
            if (window.innerWidth > 900)
            {
                setIsDesktop(true);
            } else 
            {
                setIsDesktop(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div className="graybar-header">
            <Link to="/" className="logo" onClick={ScrollToTop}>
                <img src={ksea_logo} alt="ksea logo" />
                <span>UCI KSEA</span>
            </Link>
            <div className="whitebar">
                {
                    isDesktop ?
                    <ul className="tabs">
                        <li>
                            <a href="/#about">About</a>
                        </li>
                        <li>
                            <a href="/activity">Activity</a>
                        </li>
                        <li>
                            <a href="/events">Upcoming Events</a>
                        </li>
                        <li>
                            <a href="/members">Members</a>
                        </li>
                    </ul> :
                    <div className="dropdown">
                        <Popup trigger={<button className="drop-btn"><FaBars size={30}/></button>} arrow={false} position="bottom right">
                            <ul className="drop-tabs">
                                <a href="/#about">
                                    <li>About</li>
                                </a>
                                <a href="/activity">
                                    <li>Activity</li>
                                </a>
                                <a href="/events">
                                    <li>Upcoming Events</li>
                                </a>
                                <a href="/members">
                                    <li>Members</li>
                                </a>
                            </ul>
                        </Popup>
                    </div>
                }
            </div>
        </div>
    );
};

export default NavBar;