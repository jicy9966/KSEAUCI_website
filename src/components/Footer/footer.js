import React from "react";
import "./footer.scss";
import { ksea_logo, uci_logo } from "../../utils/images"
import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Footer = () =>
{
    return(
        <div className="graybar-footer">
            <div className="logo-wrap">
                <img src={ksea_logo} alt="ksea logo"></img>
                <img src={uci_logo} alt="uci logo"></img>
            </div>
            <div className="mid-wrap">
                <div>Korean-American Scientist and Engineers Association.</div>
                <div>University of California, Irvine.</div>
                <div>© KSEA UCI</div>
            </div>
            <div className="right-wrap">
                <span>Follow us!</span>
                <div className="red-line"/>
                <div className="insta-link">
                    <FaInstagram />
                    <a href="https://www.instagram.com/kseaucirvine/" target="blank">kseaucirvine_instagram</a>
                </div>
                <div className="linktree-link">
                    <SiLinktree />
                    <a href="https://linktr.ee/kseaucirvine" target="blank">kseaucirvine_linktree</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;