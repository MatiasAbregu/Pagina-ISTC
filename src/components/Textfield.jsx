import React, { useEffect, useState } from "react";
import '../styles/Textfield.css';

export const Textfield = ({ type, placeholder, multiline }) => {

    const [textValue, setTextValue] = useState("");
    const [withText, setWithText] = useState(false);

    useEffect(() => {
        if (textValue == "") setWithText(false);
        else setWithText(true);
    }, [textValue]);

    if (multiline) {
        return (
            <div className={`inputForm textArea ${withText ? "withText" : ""}`}>
                <textarea name="" id="" rows="12" className="textareaForm" onChange={e => setTextValue(e.target.value)}></textarea>
                <label>{placeholder}</label>
            </div>
        );
    } else {
        return (
            <div className={`inputForm ${withText ? "withText" : ""}`}>
                <input type={type} name="" id="" onChange={e => setTextValue(e.target.value)} />
                <label>{placeholder}</label>
            </div>
        );
    }
}