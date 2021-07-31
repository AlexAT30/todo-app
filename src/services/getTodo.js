import axios from "axios"

export const getTodo = async () => {
  const response = await axios({
    method: 'get',
    url: '/todos',
    baseURL: 'https://todos-go.herokuapp.com/api'
  })
  return response.data
}