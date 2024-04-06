import React from "react";
import '../styles/Career.css';

export const Career = ({state, img, type, title, mode, duration}) => {
    return (
        <article className="articleCareer">
            <p className={state ? "state" : "state disabled"}>{state ? "Inscripciones abiertas" : "Inscripciones cerradas"}</p>
            <img src={img} alt="" />
            <p className="type">{type}</p>
            <h4>{title}</h4>
            <p className="info">{`• Modalidad: ${mode}`} <br /> {`• Duración: ${duration}`}</p>
            <button>Más información</button>
        </article>
    );
}