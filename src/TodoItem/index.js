import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

    // const onComplete = () => {
    //     alert('Ya completaste el To Do ' + props.text);
    // }
    // const onDelete = () => {
    //     alert('Borraste el To DO ' + props.text);
    // }

    return (
        <li className={`${props.completed && 'completed'}`}>
            <span id='check' onClick={props.onComplete}><i className="fa-solid fa-check"></i></span>
            <p>{props.text}</p>
            <span id="trash" onClick={props.onDelete}><i className="fa-regular fa-trash-can"></i></span>
        </li>
    );
}

export { TodoItem };