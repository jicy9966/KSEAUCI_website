import React from "react";
import "./MembersPage.scss"
import { NavBar, Footer, Member } from "../../components/components";

const MembersPage = () =>
{
    return(
        <div>
            <NavBar />
            <div className="page-wrap">
                {/*Title*/}
                <div className="header">
                    <h1>Our Board Members</h1>
                    <div className="yellow-line"></div>
                    <h2>2024 ~ 2025</h2>
                </div>

                <div className="members-wrap">
                    <Member photo={""}
                            name_en={"Yoonseo Oh"} name_kr={"오윤서"}
                            position_en={"President"} position_kr={"회장"}
                            major={"Biomedical Engineering"} />
                    <Member photo={""}
                            name_en={"Juwon Lee"} name_kr={"이주원"}
                            position_en={"Vice President"} position_kr={"부회장"}
                            major={"Business Administration"} />
                    <Member photo={""}
                            name_en={"Sunmi Jang"} name_kr={"장선미"}
                            position_en={"Event Coordinator"} position_kr={"기획팀 팀장"}
                            major={"Language Science"} />
                    <Member photo={""}
                            name_en={"Yurie Jeong"} name_kr={"정유리"}
                            position_en={"Secretary"} position_kr={"행정팀 팀장"}
                            major={"Biological Sciences"} />
                    <Member photo={""}
                            name_en={"Minjeong Kim"} name_kr={"김민정"}
                            position_en={"PR/Marketing"} position_kr={"미디어팀 팀장"}
                            major={"Business Information Management"} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MembersPage;