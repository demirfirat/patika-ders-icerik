import React from "react";
import { useTodo } from "../../contexts/TodoContext";

let filtered = null;

function List (){
    const {todos, destroyTodo, toggleTodo, filter} = useTodo();

    filtered = todos;
    if(filter !== "all"){
        filtered = todos.filter((todo) => 
        filter === "active" ? todo.completed === false : todo.completed === true);
    }

    const onChange = (id) =>{
        toggleTodo(id);
    };

    const onDestroy = (id) =>{
        destroyTodo(id);
    };

    return (
        <ul className="todo-list">
            {
                filtered.map(todo => (
                    <li key={todo.id} className={todo.completed ? "completed": ""}>
                        <div className="view">
                            <input type="checkbox" className="toggle" checked={todo.completed} onChange={()=> onChange(todo.id)} />
                            <label>{todo.text}</label>
                            <button className="destroy" onClick={()=> onDestroy(todo.id)}></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default List;
