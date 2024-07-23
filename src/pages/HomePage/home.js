import React from "react";
import "./home.scss";
import { NavBar, Footer } from "../../components/components";
import { FrontTitle, AboutSection, Organization, Geography, Leadership } from "./sections";

const HomePage = () =>
{
    return(
        <div className="page-wrap">
            <NavBar/>
            <div className="home-wrap">
                <FrontTitle />
                <AboutSection />
                <Organization />
                <Geography />
                <Leadership />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;