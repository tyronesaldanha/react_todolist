import React from "react"

function TodoItem(props) {
    {console.log(props.item.completed)}
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} //doesnt work if this line is here, but works in scrimba
                onChange={() => props.handleChange(props.item.id)} 
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem