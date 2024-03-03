import React,  {useContext, useState, createContext} from "react";


export const TodoContext = createContext(null);

const TodoProvider =({children}) => {
    const [todo, setTodo] = useState([])


    const getTodoList = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => setTodo(res))
            .then(err=> console.log(err))

    }
    const removeTodoList = () => {
        setTodo([]);
    }
    return(
        <TodoContext.Provider value={{todo,getTodoList,removeTodoList}}>
            {children}
        </TodoContext.Provider>

    )
}
export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider
