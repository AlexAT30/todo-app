import { useEffect, useState } from "react"
import { deleteTodo } from "../services/deleteTodo"
import { getTodo } from "../services/getTodo"
import { updateTodo } from "../services/updateTodo"
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
      }
    },[todoData]
  )
  const onDelete = async (id) => {
    await deleteTodo(id)
    setTodoData(oldData => oldData.filter(element => element.id !== id))
  }
  const onUpdate = async (currentTask) => {
    currentTask.isCompleted === true ? currentTask.isCompleted = false :  currentTask.isCompleted = true
    const res = await updateTodo(currentTask)
    setTodoData(oldData => oldData.map(element => {
      if(element.id === res.id)
        {return currentTask} else {return element} 
    }))
  }

  // pinta las tareas en la pagina
  const todoList = todoData.map(element => <TodoItem 
    key={element.id}
    student={element.student}
    task={element.task}
    id={element.id}
    isCompleted={element.isCompleted}
    onDelete={onDelete}
    onUpdate={onUpdate}
    />)
    
  const emptyList = <div className='empty'><p>No hay elementos que mostrar</p></div>
  
  return (
    <div className='todoContainer' >
      {
        loadTodo 
        ?
        todoList.length === 0 ? emptyList : todoList
        :
        'cargando'
      }
    </div>
  )
}
export default TodoContainer