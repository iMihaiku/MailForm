import axios from 'axios'

const baseURL = 'https://lit-inlet-93494.herokuapp.com'

const login = async({ username, password }) => {
  let error
  const response = await axios
    .post(`${baseURL}/login`, { username, password })
    .catch((res) => {
      error = res.response.data.error
    })
  if (error) {
    return { error }
  } else {
    return response.data
  }
}
export default login
