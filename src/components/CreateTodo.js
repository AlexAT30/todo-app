import { useForm } from "react-hook-form"
import { createTodo } from "../services/createTodo"

const CreateTodo = ({ setTodoData, setModal, modal }) => {

  const { register, handleSubmit } = useForm()

  const onSubmit = async (values) => {
    const newData = await createTodo(values)
    setTodoData(oldData => [...oldData, newData.data])
  }
  
  return (
    <div className={`formBg modal-${modal}`}>
      <form className='form' onSubmit={handleSubmit(onSubmit)} >
      <button className='closeCreate' onClick={() => setModal(false)}>
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
          {...register('task')}>
          </input>
        </label>
        <button className='submit' type="submit" >Agregar</button>
      </form>
    </div>
  )
}
export default CreateTodo