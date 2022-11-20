import axios from 'axios'
const DEFAULT_FILTER = 'FD'
const baseURL = 'https://api-rest-mauve.vercel.app'

const getMensajes = async(filtro = DEFAULT_FILTER, path) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const res = await axios
    .get(`${baseURL}/api/mensajes${path}`, {
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .catch((res) => {
      console.log(res)
    })
  return filterMensajes(res.data, filtro || DEFAULT_FILTER)
}
const changeFavorite = async(id, favorito) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const response = await axios
    .put(
      `${baseURL}/api/mensajes/${id}`,
      { favorito },
      { headers: { Authorization: `Bearer ${user.token}` } }
    )
    .catch((res) => {
      console.log(res)
    })
  return response.data
}
const changeLeido = async(id, leido) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const response = await axios
    .put(
      `${baseURL}/api/mensajes/${id}`,
      { leido },
      { headers: { Authorization: `Bearer ${user.token}` } }
    )
    .catch((res) => {
      console.log(res)
    })
  return response.data
}
const filterMensajes = (mensajes, selectedFilter) => {
  const mensajesOrdenados = mensajes.slice()
  switch (selectedFilter) {
    case 'FD':
      return orderDateDescendent(mensajesOrdenados)
    case 'FA':
      return orderDateAscendent(mensajesOrdenados)
    case 'PD':
      return orderProcedenceDescendent(mensajesOrdenados)
    case 'PA':
      return orderProcedenceAscendent(mensajesOrdenados)
    default:
      return mensajesOrdenados
  }
}
function orderDateDescendent(mensajesOrdenados) {
  mensajesOrdenados.sort((a, b) => {
    if (a.fecha < b.fecha) {
      return 1
    }
    if (a.fecha > b.fecha) {
      return -1
    }
    return 0
  })
  return mensajesOrdenados
}
function orderDateAscendent(mensajesOrdenados) {
  mensajesOrdenados.sort((a, b) => {
    if (a.fecha < b.fecha) {
      return -1
    }
    if (a.fecha > b.fecha) {
      return 1
    }
    return 0
  })
  return mensajesOrdenados
}
function orderProcedenceDescendent(mensajesOrdenados) {
  mensajesOrdenados.sort((a, b) => {
    if (a.procedencia < b.procedencia) {
      return 1
    }
    if (a.procedencia > b.procedencia) {
      return -1
    }
    return 0
  })
  return mensajesOrdenados
}
function orderProcedenceAscendent(mensajesOrdenados) {
  mensajesOrdenados.sort((a, b) => {
    if (a.procedencia < b.procedencia) {
      return -1
    }
    if (a.procedencia > b.procedencia) {
      return 1
    }
    return 0
  })
  return mensajesOrdenados
}
async function busquedaCompleta(busqueda, noLeido, filtro, path) {
  let mensajes = await getMensajes(filtro, path)
  mensajes = noLeido ? mensajes.filter((mensaje) => { return mensaje.leido === !noLeido }) : mensajes
  mensajes = mensajes.filter((mensaje) => {
    return mensaje.procedencia.toUpperCase().includes(busqueda.toUpperCase()) || mensaje.asunto.toUpperCase().includes(busqueda.toUpperCase())
  })
  return mensajes
}
export { changeFavorite, changeLeido, getMensajes, filterMensajes, busquedaCompleta }
