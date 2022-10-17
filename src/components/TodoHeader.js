import React, { useState } from "react";

export const TodoHeader = ({ todo, setTodo, setTodos, todos }) => {
    const [todosLen, setTodosLen] = useState(0);
    const onChangeInputText = (event) => {
        const {target : {value}} = event;
        
        setTodo(value);
    }
    //배열 전체를 넣어서 json으로 바꿔 넣고빼기
    const onClick = () => {
        setTodos((prev) => {
            return [...prev, {
                id:todosLen,
                todoText : todo,
                isChecked : false,
            }];
        })

        for(let i=0;i<todos.length;i++){
            localStorage.setItem(i, JSON.stringify(todos[i]));
        }

        // localStorage.setItem(todosLen, JSON.stringify(todos));
        
        setTodosLen((prev) => prev+1);

        setTodo('');

    }

    return(
        <>
            <input type="text" value={todo || ''} onChange={onChangeInputText}/>
            <button onClick={onClick}>write</button>
        </>
    );
}

export default TodoHeader;