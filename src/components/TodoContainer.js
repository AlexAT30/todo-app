import { useEffect, useState } from "react"
import { deleteTodo } from "../services/deleteTodo"
import { getTodo } from "../services/getTodo"
import TodoItem from "./TodoItem"

const TodoContainer = ({ setTodoData, todoData }) => {

  const [loadTodo, setLoadTodo] = useState(false)

  useEffect (
    () => {
      const getData = async() => {
        const data = await getTodo()
        setTodoData(data.todos)
      }
      getData()
    }, [setTodoData]
  )
  useEffect (
    () => {
      if(todoData) {
        setLoadTodo(true)
        console.log(todoData);
      }
    },[todoData]
  )
  const onDelete = async (id) => {
    await deleteTodo(id)
    setTodoData(oldData => oldData.filter(element => element.id !== id))
  }

  // pinta las tareas en la pagina
  const todoList = todoData.map(element => <TodoItem 
    key={element.id}
    student={element.student}
    task={element.task}
    id={element.id}
    onDelete={onDelete}
    />)

  
  return (
    <div className='todoContainer' >
      {
        loadTodo 
        ?
        todoList
        :
        'hola'
      }
    </div>
  )
}
export default TodoContainer