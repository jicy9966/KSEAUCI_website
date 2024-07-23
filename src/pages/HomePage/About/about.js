import React from "react";
import "./about.scss";
import { FaQuoteLeft, FaRegCalendarCheck, FaTrophy } from "react-icons/fa";
import { FaGear, FaPeopleGroup } from "react-icons/fa6"
import { Link } from "react-router-dom";

const AboutSection = () =>
{
    return(
        <div id="about" className="about-wrap">
            <div className="title">About KSEA</div>
            <div className="yellow-line"/>
            <ul className="cards">
                <li>
                    <span className="bold">What does <span className="blue">KSEA</span> stand for?</span>
                    <div className="textbox">
                        <span><span className="bold blue">K</span>orean-American</span>
                        <span><span className="bold blue">S</span>cientists and</span>
                        <span><span className="bold blue">E</span>ngineers</span>
                        <span><span className="bold blue">A</span>ssociation</span>
                    </div>
                    <FaQuoteLeft size={40} className="quotation"/>
                    <div className="dash-box">
                        한국과 미국에 있는 과학자들 교류를 통해 <br/>
                        다양한 연구를 촉진하고, 재미 한인 유학생들의 <br/>
                        커리어를 도우며, 연구개발을 통해 사회에 <br/>
                        이바지 하는것을 목표로 하고 있습니다. <br/>
                    </div>
                </li>
                <li>
                    <div>Our Vision</div>
                    <ol className="visions">
                        <div>
                             1 <div className="black-line"/>
                             <div className="desc">
                                Promote the application of science and technology for the general welfare of society.
                            </div>
                        </div>
                        <div>
                             2 <div className="black-line"/>
                             <div className="desc">
                                Foster international cooperation especially between the U.S. and Korea.
                            </div>
                        </div>
                        <div>
                             3 <div className="black-line"/>
                             <div className="desc">
                                Help Korean-American Scientists and Engineers develop their full career potential.
                            </div>
                        </div>
                    </ol>
                </li>
                <li>
                    <div className="header">What we do</div>
                    <ul className="grayboxes">
                        <div className="box">
                            <FaRegCalendarCheck />
                            STEM Events
                        </div>
                        <div className="box">
                            <FaGear />
                            Career Workshops
                        </div>
                        <div className="box">
                            <FaPeopleGroup />
                            Social Networking
                        </div>
                        <div className="box">
                            <FaTrophy />
                            Awards & Scholarships
                        </div>
                    </ul>
                    <Link to="/activity" className="yellow-btn">More info →</Link>
                </li>
            </ul>
        </div>
    );
};

export default AboutSection;