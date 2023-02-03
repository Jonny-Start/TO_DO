import React from 'react';
import './TodoList.css'

function TodoList(props) {
    return (
        <section className='sectionTodoList'>
            <ul className='ulTodoList'>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };