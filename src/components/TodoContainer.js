import { useEffect, useState } from "react"
import { getTodo } from "../services/getTodo"
import TodoItem from "./TodoItem"

const TodoContainer = () => {

  const [todoData, setTodoData] = useState([])
  const [loadTodo, setLoadTodo] = useState(false)

  useEffect (
    () => {
      const getData = async() => {
        const data = await getTodo()
        setTodoData(data.todos)
      }
      getData()
    }, []
  )
  useEffect (
    () => {
      if(todoData) {
        setLoadTodo(true)
      }
    },[todoData]
  )
  // pinta las tareas en la pagina
  const todoList = todoData.map(element => <TodoItem student={element.student} task={element.task} />)
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