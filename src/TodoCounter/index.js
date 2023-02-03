import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoCounter.css'


function TodoCounter() {
    // const { total, totalCompleted } = props;
    const { totalTodos, completedTodos } = React.useContext(ToDoContext);

    return (
        <h2 className="TodoCounter">Haz completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };