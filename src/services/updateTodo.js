import axios from "axios"

export const updateTodo = async (currentTask) => {
  const response = await axios({
    method: 'put',
    baseURL: 'https://todos-go.herokuapp.com/api',
    url: `/todos/${currentTask.id}`,
    data: currentTask
  })
  return response.data
}