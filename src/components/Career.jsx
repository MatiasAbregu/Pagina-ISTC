import React from "react";
import '../styles/Career.css';

//Crear editor HTML

export const Career = ({state, img, type, title, mode, duration, onclick}) => {
    return (
        <article className="articleCareer">
            <p className={state ? "state" : "state disabled"}>{state ? "Inscripciones abiertas" : "Inscripciones cerradas"}</p>
            <img src={img} alt="" />
            <p className="type">{type}</p>
            <h4>{title}</h4>
            <p className="info">{`Modalidad: ${mode}`} <br /> {`Duración: ${duration}`}</p>
            <button type="button" onClick={onclick} >Más información</button>
        </article>
    );
}