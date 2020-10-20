import React, { useEffect, useReducer } from 'react'
import './../components.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = ()=>{
    //si el local storage esta vacio, regresa un array vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    //al utilizar init, el estado inicial sera directamente lo que retorna la funcion init
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));        
    }, [todos])

    const handleDelete = (todoId) =>{        
        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggle = (todoId)=>{

        const action = {
            type: 'toggle',
            payload: todoId
        };
        dispatch(action);
    };

    const handleAddTodo = (newTodo)=>{

        const action = {
            type: 'add',
            payload: newTodo
        };
        
        dispatch(action);
    }

    return (
        <div>
            <h1>Todo app ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo} 
                    />
                </div>
            </div>

        </div>
    )
}
