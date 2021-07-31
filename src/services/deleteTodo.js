import axios from "axios"

export const deleteTodo = async (id) => {
  await axios({
    method: 'delete',
    baseURL: 'https://todos-go.herokuapp.com/api',
    url: `/todos/${id}`
  })
}