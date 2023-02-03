import React from "react";
import './App.css';

import { TodoCounter } from '../TodoCounter';
import { ToDoContext, ToDoProvider } from './../ToDoContext';
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { Modal } from "./../Modal";
import { TodoForm } from "./../TodoForm"


import { EmptyTodos } from "./../EmptyTodos";
import { TodosError } from "./../TodosError";
import { TodosLoading } from "./../TodosLoading";


function AppUI() {

    const { error, loading, searchedTodos, completTodo, deleteTodo, openModal, setOpenModal } = React.useContext(ToDoContext);

    return (
        // React.Fragment esta etiqueta se usa ya que React.js necesita un elemento que encapsule toodo
        <React.Fragment>
            <div id='imgReact' className='App-logo'></div>

            {/* <TodoCounter
                total={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            /> */}

            <TodoCounter />
            <TodoSearch />

            {/* <ToDoContext.Consumer>
                {(value) => ( */}
            <TodoList>
                {/* {error && <p>Desespérate, hubo un error...</p>} */}
                {error && <TodosError error={error} />}
                {/* {loading && <p>Estamos Cargando, no desesperes...</p>} */}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {/* )}
            </ToDoContext.Consumer> */}

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };