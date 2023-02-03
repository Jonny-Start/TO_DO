import React from "react";
import { ToDoContext } from "../ToDoContext";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal, } = React.useContext(ToDoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };


    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TO DO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Nuevo elemento o nueva tarea"></textarea>
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit" >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm }