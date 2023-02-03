import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <React.Fragment>
            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'>Carganado TODOs...</p>
                <span className='LoadingTodo-deleteIcon'></span>
            </div>
            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'>Carganado TODOs...</p>
                <span className='LoadingTodo-deleteIcon'></span>
            </div>
            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'>Carganado TODOs...</p>
                <span className='LoadingTodo-deleteIcon'></span>
            </div>
        </React.Fragment>
    );
    // return <p>Estamos carganado, no desesperes...</p>
}

export { TodosLoading };