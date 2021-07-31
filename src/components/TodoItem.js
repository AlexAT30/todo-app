const TodoItem = ({ student, task }) => {
  return (
    <div className='todoItem' >
      <p className='task' >{task}</p>
      <p className='student' >- {student}</p>
      <div className='check'><i className="bi bi-check-lg"></i></div>
    </div>
  )
}
export default TodoItem