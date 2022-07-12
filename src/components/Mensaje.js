/* eslint-disable no-unused-vars */
import useMensajes from 'customHooks/useMensajes'
import React, { useState, useEffect, useContext } from 'react'
import { changeFavorite, changeLeido } from 'services/mail'
import Icono from './Icono'
import MensajesContext from 'context/MensajesContext'

export default function Mensaje({ mensaje, token }) {
  const { mensajesContext, setMensajesContext } = useContext(MensajesContext)
  const [iconFavorito, setIconFavorito] = useState()
  const [mostrarContenido, setMostrarContenido] = useState(false)
  const [iconLeido, setIconLeido] = useState(mensaje.leido)
  const [favorito, setFavorito] = useState(mensaje.favorito)
  const [classMensaje, setClassMensaje] = useState(`Mensaje ${mensaje.leido ? '' : 'strongStyle'}`)
  useEffect(() => {
    favorito ? setIconFavorito('favorito') : setIconFavorito('noFavorito')
  }, [favorito])

  const handleFavorito = async() => {
    if (favorito) {
      setFavorito(false)
      changeFavorite(mensaje.id, false)
    } else {
      setFavorito(true)
      changeFavorite(mensaje.id, true)
    }
  }
  const handleClick = async() => {
    changeLeido(mensaje.id, true)
    setClassMensaje('Mensaje')
    setIconLeido(true)
    setMostrarContenido(!mostrarContenido)
  }
  return (
    <div className="cuerpoMensaje">
      <div className={classMensaje}>
        <div className="favorito" onClick={handleFavorito}>
          <Icono icon={iconFavorito || 'noFavorito'} />
        </div>
        <div className="procedencia" onClick={handleClick}>
          {mensaje.procedencia || 'Desconocida'}
        </div>
        <div className="asunto" onClick={handleClick}>
          {mensaje.asunto}
        </div>
        <div className="leido" onClick={handleClick}>
          {iconLeido ? <Icono icon="check" /> : ''}
        </div>
        <div>{mensaje.fecha}</div>
      </div>
      {mostrarContenido
        ? (
          <div className="contenidoMensaje" onClick={handleClick}>
            <label>Mensaje: </label>
            <div className="contenido">{mensaje.contenido}</div>
          </div>
          )
        : ('')
        }
    </div>
  )
}
