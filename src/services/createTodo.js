import axios from "axios"

export const createTodo = async(data) => {
  const response = await axios({
    method: 'post',
    baseURL: 'https://todos-go.herokuapp.com/api',
    url: '/todos',
    data: data
  })
  return response
}