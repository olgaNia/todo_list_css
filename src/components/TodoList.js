import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {library} from '@fortawesome/fontawesome-svg-core';
// import * as Icons from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare, faSquareCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

// const iconList = Object
//     .keys(Icons)
//     .filter(key => key !== "fas" && key !== "prefix")
//     .map(icon => Icons[icon])
//
// library.add(...iconList)


const TodoList = ({todos, setTodos, setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item
        }))
    };
    const handleEdit = ({id}) => {
        const findTodo = todos.find(todo => todo.id === id)
        setEditTodo(findTodo)
        console.log(id)
        console.log(todos)
    };
    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    return (
        <div>
            <ol>
                {todos.map(todo => (

                    <li className="list-item"
                        key={todo.id}>
                        <input
                            className={`list ${todo.completed ? "completed" : " "}`}
                            value={todo.title}
                            onChange={(event) => event.preventDefault()}/>

                        <button
                            className="button-complete task-button"
                            onClick={() => handleComplete(todo)}>
                            <FontAwesomeIcon icon={faSquareCheck}/>
                            {/*<FontAwesomeIcon icon="check-square"/>*/}
                        </button>
                        <button
                            className="button-edit task-button"
                            onClick={() => handleEdit(todo)}>
                            {/*<FontAwesomeIcon icon="pen-to-square"/>*/}
                            <FontAwesomeIcon icon={faPenToSquare}/>
                        </button>
                        <button
                            className="button-delete task-button"
                            onClick={() => handleDelete(todo)}>
                            {/*<FontAwesomeIcon icon="trash-can"/>*/}
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </li>

                ))}
            </ol>
        </div>
    )
};

export default TodoList;