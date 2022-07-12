/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react'
import useMensajes from 'customHooks/useMensajes'
import Icono from '../components/Icono'
import HeaderList from 'components/HeaderList'
import {
  changeFavorite,
  changeLeido,
  getMensajes,
  filterMensajes,
  getMensajesFavortios
} from 'services/mail'
import Mensaje from 'components/Mensaje'
import MensajesContext from 'context/MensajesContext'
import Paginacion from 'components/Paginacion'

export default function Mensajes({ path = '/' }) {
  const context = useContext(MensajesContext)
  console.log(context)
  const { mensajesContext, setMensajesContext } = context

  const userStored = JSON.parse(window.localStorage.getItem('user'))
  const [paginacion, setPaginacion] = useState({
    paginaActual: 1,
    totalPaginas: 0
  })
  const [user, setUser] = useState(userStored)
  const [selectedFilter, setSelectedFilter] = useState()
  useEffect(() => {
    getMensajes(selectedFilter, path)
      .then((res) => {
        setMensajesContext(res)
        return res
      })
  }, [path])
  useEffect(() => {
    if (typeof selectedFilter !== 'undefined') {
      setMensajesContext(filterMensajes(mensajesContext, selectedFilter))
    }
  }, [selectedFilter])
  useEffect(() => {
    setPaginacion({
      paginaActual: 1,
      totalPaginas: Math.ceil(mensajesContext.length / 10)
    })
  }, [mensajesContext])
  return (
    <div className="Mensajes">
      <HeaderList
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        context={context}
      />
      <div className="Mensaje" style={{ borderTop: '0px' }}>
        <div className="favorito">Favorito</div>
        <div className="procedencia">Procedencia</div>
        <div className="asunto">Asunto</div>
        <div className="leido">Leido</div>
        <div>Fecha de entrega</div>
      </div>
      {
      mensajesContext.length > 0
        ? (
            mensajesContext.map((mensajeContext) => {
              if (mensajesContext.indexOf(mensajeContext) < (10 * paginacion.paginaActual) && mensajesContext.indexOf(mensajeContext) >= (10 * (paginacion.paginaActual - 1))) {
                return <Mensaje key={mensajeContext.id} mensaje={mensajeContext} />
              } else return null
            })
          )
        : (
        <div className="Mensajes">
          <div>No hay mensajes aun</div>
        </div>
          )}
          <Paginacion paginacion={paginacion} setPaginacion={setPaginacion} />
    </div>
  )
}
