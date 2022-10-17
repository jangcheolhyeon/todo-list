import React from "react";
import {TodoListItem} from './TodoListItem';

export const TodoList = ({ todos, setTodos }) => {
    return(
        <>
            {todos.map((element, index) => (
                <TodoListItem ele={element} todos={todos} setTodos={setTodos} index={index} />
            ))}
        </>
    );
}
