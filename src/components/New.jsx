import React from "react";
import '../styles/New.css';
import Dates from '../functions/Dates';

//Crear editor HTML

export const New = ({ img, date, title, info, eventClick }) => {
    return (
        <article className="articleNew" onClick={eventClick}>
            <img src={img} alt="" />
            <p className="date">{Dates.getDate(date)}</p>
            <h4>{title}</h4>
            <p className="info">{info}</p>
            <button>Más información</button>
        </article>
    );
}