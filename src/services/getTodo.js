import axios from "axios"

export const getTodo = async () => {
  const response = await axios({
    method: 'get',
    baseURL: 'https://todos-go.herokuapp.com/api',
    url: '/todos'
  })
  return response.data
}