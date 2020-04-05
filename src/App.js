import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    const TDlist = todosData.map(item => <TodoItem key={item.id} todo={item}/>)
    return (
        
        <div className="todo-list">
            { TDlist }
        </div>
    )
}

export default App