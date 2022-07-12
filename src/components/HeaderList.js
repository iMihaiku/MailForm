/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { toggleLeidos, buscadorMensajes, busquedaCompleta } from 'services/mail'

export default function HeaderList({
  selectedFilter = 'FD',
  setSelectedFilter,
  context,
  favoritos = false
}) {
  const [noLeido, setNoLeido] = useState(false)
  const [ultimaBusqueda, setUltimaBusqueda] = useState('')
  const path = window.location.pathname
  const refSelect = useRef()
  const refBuscador = useRef()

  const handleChange = () => {
    setSelectedFilter(
      refSelect.current.options[refSelect.current.selectedIndex].value
    )
  }
  const handleBuscador = (ev) => {
    if (ev.key === 'Enter') {
      setUltimaBusqueda(refBuscador.current.value)
      busquedaCompleta(refBuscador.current.value, noLeido, selectedFilter, path)
        .then(res => context.setMensajesContext(res))
    }
  }
  const handleNoLeido = (ev) => {
    ev.target.checked ? setNoLeido(true) : setNoLeido(false)
    busquedaCompleta(ultimaBusqueda, ev.target.checked, selectedFilter, path)
      .then(res => context.setMensajesContext(res))
  }
  return (
    <div className="HeaderList">
      <label>Mail List</label>
      <br />
      <div className="filtros">
        <select value={selectedFilter} onChange={handleChange} ref={refSelect}>
          <option value="FD">Fecha Descendente</option>
          <option value="FA">Fecha Ascendente</option>
          <option value="PD">Procedencia Descendente</option>
          <option value="PA">Procedencia Ascendente</option>
        </select>
        <label className="checkLeido">
          No leido
          <input type="checkbox" value="No leidos" onChange={handleNoLeido} checked={noLeido}/>
        </label>
        <input
          type="text"
          placeholder="Buscar"
          className="buscador"
          onKeyDown={handleBuscador}
          ref={refBuscador}
        />
      </div>
    </div>
  )
}
