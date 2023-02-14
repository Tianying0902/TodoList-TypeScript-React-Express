import React from 'react';
import "../style/TodoFilterButtons.css"
import {Todo, ShowActiveTodos, ShowAllTodos, ShowCompletedTodos,ClearCompletedTodos } from '../types';

interface TodoFilterButtonsProps{
    todos:Array<Todo>;
    showAllTodos:ShowAllTodos;
    showActiveTodos:ShowActiveTodos;
    showCompletedTodos:ShowCompletedTodos;
    clearCompletedTodos:ClearCompletedTodos;
}

export const TodoFilterButtons:React.FC<TodoFilterButtonsProps> = ({todos,showAllTodos,showActiveTodos,showCompletedTodos,clearCompletedTodos}) => {
    return (
<div className='filter-section'>
    <div  className='left-items'>{todos.length} items left</div>
    <div>
        <span className='all-btn'  onClick={showAllTodos}>All </span>
        <span className='active-btn' onClick={showActiveTodos}>Active </span>
        <span className='completed-btn' onClick={showCompletedTodos}>Completed</span>
        </div>
        <span className='clear-btn' onClick={clearCompletedTodos}>Clear Completed</span>
</div>
    )
}