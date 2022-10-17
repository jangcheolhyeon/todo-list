import React, { useState } from "react";

export const TodoListItem = ({ ele, todos, setTodos, index }) => {
    const {isChecked, todoText} = ele
    const [edited, setEdited] = useState(false);
    const [newtext, setNewText] = useState(todoText);

    //지울때도 index값으로 지우기
    const onRemoveTodo = (index) => {
        // setTodos((prev) => {
        //     return prev.filter((element) => {
        //         return element.todoText !== event.target.parentElement.innerText;
        //     })
        // })
        // console.log(event.target.parentElement.innerText);
        // // filter말고 딴거 index값을 알면 array를 지울수있음.
        // const key = todos.filter((element) => {
        //     if(element.todoText === event.target.parentElement.innerText)
        //         return element.id;
        //     return false
        // })
        // localStorage.removeItem(key[0].id);
        
        let newTodos = [...todos];
        newTodos.map((element) => {
            return element.id === index ? newTodos.splice(index, 1) : element;
        })
        setTodos(newTodos);

        localStorage.removeItem(index);
    }

    const todoDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].isChecked = !newTodos[index].isChecked;
        setTodos(newTodos);
        // console.log(todos);
    }

    const onChangeEditInput = (e) => {
        // console.log(e.target.value);
        setNewText(e.target.value);
    } 

    const onClickEditButton = () => {
        // console.log(todos);
        setEdited((prev) => !prev);
    }

    const onClickCompleteButton = (index) => {
        console.log(todos);
        setEdited((prev) => !prev);
        const newTodos = [...todos];
        newTodos[index].todoText = newtext;
        setTodos(newTodos);

        // setTodos(
        //     todos.map((element) => {
        //         return element.id === index ? { ...element, todoText : newtext } : element
        //     })
        // )

        // console.log(index);
        // console.log(newtext);
        localStorage.setItem(index, newtext);
    }

    return(
        <div>
            <input type="checkbox" onClick={() => todoDone(index)} checked={isChecked}/>
            { edited ? (
                <input type="text" value={newtext} onChange={onChangeEditInput}/>
            ) : (
                <span style={{ color : isChecked ? "gray" : null  }}>{todoText}</span>
            ) }
            <input type="button" value="remove" onClick={() => onRemoveTodo(index)}/>
            {edited ? (
                <input type="button" value="complete" onClick={ () => onClickCompleteButton(index) } />
            ) : (
                <input type="button" value="edit" onClick={ onClickEditButton } />
            )}

        </div>
    );
}
