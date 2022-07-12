/* eslint-disable no-trailing-spaces */
import axios from 'axios'
import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
let mensajesTotales = []

export default function useMensajes() {
  const [mensajes, updateMensajes] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    async function axiosData() {
      const res = await axios
        .get('http://localhost:3001/api/mensajes', { headers: { Authorization: `Bearer ${user.token}` } })
        .catch((res) => {
          console.log(res)
        })
      const mensajes = res.data.map((mensaje) => mensaje)
      mensajesTotales = mensajes
    }
    axiosData()
  }, [])
  return [mensajes, updateMensajes, buscarMail, buscarLeidos]
}

const buscarMail = (busqueda) => {
  const mensajesFiltrados = mensajesTotales.filter((mensaje) => {
    return mensaje.id.includes(busqueda) || mensaje.asunto.includes(busqueda)
  })
  console.log(mensajesFiltrados)
  return mensajesFiltrados
}
const buscarLeidos = (leidos) => {
  const mensajesFiltrados = mensajesTotales.filter((mensaje) => {
    return mensaje.leido === !leidos
  })
  console.log(mensajesFiltrados)
  return mensajesFiltrados
}
