import {useState} from "react";
import {useTodoContext} from "../contexts/TodoContext";

const TodoList = () => {
    const [color, setColor] =  useState("darkcyan");
    const [activeId, setActiveId] = useState(null);
    const todoListContext =  useTodoContext();
    console.log(todoListContext.todo)

    return(
        <>
            <div className="btn-content">
                <button onClick ={() => todoListContext.getTodoList() }>Add TodoList</button>
                <button onClick ={() => todoListContext.removeTodoList() }>Remove TodoList</button>
            </div>
            <div className="todoList-content">
                {
                    todoListContext.todo.map(item =>
                        <div key={item.id} className="todoList-content-item"
                             style={{backgroundColor: activeId === item.id ? "green": color}}>
                            <span>{item.id}</span>
                            <p>{item.title}</p>
                            <button onClick={()=>setActiveId(item.id)}>Complete</button>
                        </div>)
                }
            </div>
        </>
    )

}
export default TodoList;