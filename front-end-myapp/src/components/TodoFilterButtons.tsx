import React from 'react';
import "../style/TodoFilterButtons.css"
import {Todo, ShowActiveTodos, ShowAllTodos, ShowCompletedTodos } from '../types';

interface TodoFilterButtonsProps{
    todos:Array<Todo>;
    showAllTodos:ShowAllTodos;
    showActiveTodos:ShowActiveTodos;
    showCompletedTodos:ShowCompletedTodos;
}

export const TodoFilterButtons:React.FC<TodoFilterButtonsProps> = ({todos,showAllTodos,showActiveTodos,showCompletedTodos}) => {
    return (
<div className='filter-section'>
    <div  className='left-items'>{todos.length} items left</div>
    <div>
        <span className='all-btn'  onClick={showAllTodos}>All </span>
        <span onClick={showActiveTodos}>Active </span>
        <span onClick={showCompletedTodos}>Completed</span>
        </div>
        <span className='clear-btn'>Clear Completed</span>
</div>
    )
}