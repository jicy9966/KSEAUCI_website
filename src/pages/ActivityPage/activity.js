import React from "react";
import "./activity.scss";
import { NavBar, Footer } from "../../components/components";
import Timeline from "./Timeline/timeline";

const ActivityPage = () =>
{
    return(
        <div>
            <NavBar />
            <div className="page-wrap">
                <div className="activity-wrap">
                    <div className="title">Timeline of KSEA UCI</div>
                    <div className="yellow-line"/>
                    <div className="subheader">Since Fall 2023</div>
                    <Timeline />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ActivityPage;