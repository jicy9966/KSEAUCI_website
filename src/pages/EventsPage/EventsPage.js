import React, { useState } from "react";
import "./EventsPage.scss"
import { NavBar, Footer } from "../../components/components";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { generateDate } from "../../utils/calendar";
import cn from "../../utils/cn"
import dayjs from "dayjs";
import { eventList } from "../../config/events";
import Popup from "reactjs-popup";

//reference1 = https://github.com/Chensokheng/react-tailwind-calendar
//reference2 = https://github.com/opensource-coding/Responsive-Calendar-with-Events/tree/main

const EventsPage = () =>
{
    const currentDay = dayjs();
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];

    const [today, setToday] = useState(currentDay);
    const [selectDate, setSelectDate] = useState(currentDay);

    const handleMonthChange = (direction) => 
    {
        setToday(today.month(today.month() + direction));
    };

    const dayEvents = eventList.find((item) => item.date === selectDate.format("MMM DD ddd"));

    return(
        <div>
            <NavBar />
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="header">
                        <h1>KSEA UCI Events Calendar</h1>
                        <div className="yellow-line"></div>
                    </div>

                    <div className="showcase-wrap">
                        <div className="calendar">
                            {/*Display calendar header*/}
                            <div className="month">
                                <BiSolidLeftArrow className="arrow" onClick={() => handleMonthChange(-1)}/>
                                <text className="date">{monthNames[today.month()]}, {today.year()}</text>
                                <BiSolidRightArrow className="arrow" onClick={() => handleMonthChange(1)}/>
                            </div>

                             {/*Display weekdays*/}
                            <div className="weekdays">
                                <text>SUN</text><text>MON</text><text>TUE</text>
                                <text>WED</text><text>THU</text><text>FRI</text>
                                <text>SAT</text>
                            </div>

                            {/*Display grid*/}
                            <div className="calendar-grid">
                                {generateDate(today.month(), today.year()).map(({ date, currentMonth, today, hasEvents }) => 
                                (<div className="days" onClick={() => (setSelectDate(date))}>
                                    <text className={cn(currentMonth ? "" : "outDate", 
                                                        today ? "today" : "", 
                                                        hasEvents ? "hasEvents" : "")}>{date.date()}</text>
                                </div>))}
                            </div>
                        </div>
                        <div className="schedule">
                            {/*Go To Today*/}
                            <div className="today-button">
                                <button onClick={() => {setSelectDate(currentDay); setToday(currentDay);}}>Go to Today</button>
                            </div>   

                            {/*Selected Date*/}
                            <div className="selected-date">Schedule for {dayjs(selectDate).format("MMM DD, dddd")}</div>

                            {/*Events*/}
                            <div className="events-wrap">
                                { dayEvents ? dayEvents.events.map((event, index) => (
                                    <div key={index} className="event">
                                        {event.title}
                                        <Popup trigger={<button className="button"> Info </button>} position="left center" modal={true}>
                                            { close => (
                                                <div className="mod">
                                                    <button className="close" onClick={close}>X</button>
                                                    <text className="content">{event.description}</text>
                                                    <div className="flex-col">
                                                        {event.time ? <text className="time">TIME: {event.time}</text> : null}
                                                        {event.location ? <text className="location">Location: {event.location}</text> : null}
                                                    </div>
                                                    <div className="links">
                                                        {event.linkRSVP ? <a href={event.linkRSVP} target="blank">RSVP</a> : null}
                                                        {event.linkInfo ? <a href={event.linkInfo} target="blank">More info</a> : null}
                                                    </div>
                                                </div>
                                            )}
                                        </Popup>
                                    </div>
                                )) : <div className="empty">No events for this day.</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventsPage