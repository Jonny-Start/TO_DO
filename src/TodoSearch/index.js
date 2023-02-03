import React from "react";
import { ToDoContext } from "../ToDoContext";
import './TodoSearch.css'

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(ToDoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return (
        <React.Fragment>
            <input placeholder="Buscar" className="TodoSearch" onChange={onSearchValueChange} value={searchValue} />
            <i className="fa-solid fa-magnifying-glass"></i>
        </React.Fragment>
    );
}

export { TodoSearch };