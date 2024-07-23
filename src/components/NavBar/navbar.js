import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { ksea_logo } from "../../utils/images";
import ScrollToTop from "../ScrollToTop";

const NavBar = () =>
{
    return(
        <div className="graybar-header">
            <Link to="/" className="logo" onClick={ScrollToTop}>
                <img src={ksea_logo} alt="ksea logo" />
                <span>KSEA UCI</span>
            </Link>
            <div className="whitebar">
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
                </ul>
            </div>
        </div>
    );
};

export default NavBar;