const TodoItem = ({ student, task, id, onDelete }) => {

  return (
    <div className='todoItem' >
      <button className='delete' onClick={() => onDelete(id)}><i className="bi bi-trash-fill"></i></button>
      <div>
        <p className='task' >{task}</p>
        <p className='student' >- {student}</p>
      </div>
      <button className='check'><i className="bi bi-check-lg"></i></button>
    </div>
  )
}
export default TodoItem