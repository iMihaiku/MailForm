import axios from 'axios'

const baseURL = 'http://localhost:3001'

const registro = async({ nickname, username, password }) => {
  let error
  const response = await axios
    .post(`${baseURL}/usuarios/registro`, { username, name: nickname, password })
    .catch((res) => {
      error = res.response.data.error
      console.log(error)
    })
  if (error) {
    return { error }
  } else {
    return response.data
  }
}
export default registro
