import dayjs from "dayjs";
import { eventList } from "../config/events";

export const generateDate = (month = dayjs().month(), year = dayjs().year()) =>
{
    const firstDateMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateMonth = dayjs().year(year).month(month).endOf("month");

    const arrayDate = [];

    let eventDates = eventList.map((item) => item.date);

    //days before firstDate
    for (let i=0; i<firstDateMonth.day(); i++)
    {
        let theDay = firstDateMonth.day(i).format("MMM DD ddd");
        arrayDate.push({currentMonth: false, 
                        date: firstDateMonth.day(i),
                        hasEvents: eventDates.includes(theDay), });
    }

    //dates of the month
    const buffer = arrayDate.length - 1;
    for (let i=firstDateMonth.date(); i<=lastDateMonth.date(); i++)
    {
        let theDay = firstDateMonth.day(i+buffer).format("MMM DD ddd");
        arrayDate.push({currentMonth: true, 
                        date: firstDateMonth.date(i), 
                        today: firstDateMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
                        hasEvents: eventDates.includes(theDay), 
                        theDate: theDay, });
    }

    //dates after lastDate
    const remaining = 42 - arrayDate.length;
    for (let i=lastDateMonth.date()+1; i<=lastDateMonth.date()+remaining; i++)
    {
        let theDay = firstDateMonth.day(i+buffer).format("MMM DD ddd");
        arrayDate.push({currentMonth: false, 
                        date: firstDateMonth.date(i), 
                        hasEvents: eventDates.includes(theDay), });
    }

    console.log(arrayDate);
    return arrayDate;
}