import { useForm } from "react-hook-form"
import { createTodo } from "../services/createTodo"

const CreateTodo = ({ setTodoData, setModal, modal }) => {

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (values) => {
    if(values.student === ''){values.student = 'Anonymous'}
    const newData = await createTodo(values)
    setTodoData(oldData => [...oldData, newData.data])
    setModal(false)
    reset()
  }
  const closeModal = (e) => {
    e.preventDefault()
    setModal(false)
    reset()
  }
  
  return (
    <div className={`formBg modal-${modal}`}>
      <form className='form' onSubmit={handleSubmit(onSubmit)} >
      <button className='closeCreate' onClick={(e) => closeModal(e)}>
        <i className="bi bi-x-circle"></i>
      </button>
      <h2>Create Task</h2>
        <label>
          <p>Student:</p>
          <input placeholder='Student&rsquo;s name'
          {...register('student')}>
          </input>
        </label>
        <label>
          <p>Task:</p>
          <input placeholder='Task'
          {...register('task', {required: true})}>
          </input>
        </label>
        <button className='submit' type="submit" >Agregar</button>
      </form>
    </div>
  )
}
export default CreateTodo