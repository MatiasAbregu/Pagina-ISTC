import React from "react";
import '../styles/New.css';

export const New = ({img, date, title, info}) => {
    
    const getDate = (date) => {
        let newDate = ``;

        if(date.getDate() < 10){
            newDate = `0${date.getDate()}/`;
        } else newDate = `${date.getDate()}/`;

        if(date.getMonth() < 10){
            newDate += `0${date.getMonth()}/`;
        } else newDate += `${date.getMonth()}/`;

        if(date.getYear()) {
            newDate += `${date.getYear() + 1900}`;
        }

        return newDate;
    }

    return (
        <article className="articleNew">
            <img src={img} alt="" />
            <p className="date">{getDate(date)}</p>
            <h4>{title}</h4>
            <p className="info">{info}</p>
        </article>
    );
}