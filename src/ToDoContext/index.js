import React, { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";


const ToDoContext = React.createContext();

function ToDoProvider(props) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState(''); //Se crea un estado de una variable llamada searchValue y se inicializa vacio

    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todos => !!todos.completed).length;
    const totalTodos = todos.length; //todos => todos.completed == true

    let searchedTodos = [];
    if (searchValue.length <= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase(); //Falta remover tildes o caracteres especiales
            const searchText = searchValue.toLowerCase(); //Falta remover tildes o caracteres especiales
            return todoText.includes(searchText);
        });
    }


    const addTodo = (text) => {
        const newTodos = [...todos]; //Variable newTodos igual a la variable todos

        newTodos.push({
            completed: false,
            text,
        });

        saveTodos(newTodos);
    };


    const completTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; //Variable newTodos igual a la variable todos

        newTodos[todoIndex].completed = true;

        saveTodos(newTodos);

        // todos[todoIndex] = {
        //   text:todos[todoIndex].text,
        //   completed: true,
        // }
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; //Variable newTodos igual a la variable todos

        newTodos.splice(todoIndex, 1);

        saveTodos(newTodos);
    };

    // console.log("Render (Antes del use effect)");

    // React.useEffect(() => {
    //   console.log('use effect');
    // }, [totalTodos]);//Lo que esta en [] es la condicion de cuando se dederia ejecutar mi useEffect

    // console.log("Render (Luego del use effect)");


    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            addTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            completTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {/* En el value se pone el valor de los estados que queremos compartir en nuestro contexto */}
            {/* Lo usaremos para envolver toda nuestra aplicación */}
            {props.children}



        </ToDoContext.Provider>
    );
}


export { ToDoContext, ToDoProvider };

// {/* <ToDoContext.Consumer></ToDoContext.Consumer>//Este lo usaremos en todas partes donde necesitemos de la info compartida */}
