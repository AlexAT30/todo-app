const TodoItem = ({ student, task, id, isCompleted, onDelete, onUpdate }) => {

  return (
    <div className={`todoItem todoItemCompleted-${isCompleted}`} >
      <button className='delete' onClick={() => onDelete(id)}><i className="bi bi-trash-fill"></i></button>
      <div>
        <p className={`task taskCompleted-${isCompleted}`} >{task}</p>
        <p className='student' >- {student}</p>
      </div>
      <button onClick={() => onUpdate({id, isCompleted, student, task})} className={`check checkCompleted-${isCompleted}`}><i className="bi bi-check-lg"></i></button>
    </div>
  )
}
export default TodoItem