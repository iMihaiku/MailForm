/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Icono from './Icono'
import 'styles/paginacion.css'

export default function Paginacion({ paginacion, setPaginacion }) {
  const [paginas, setPaginas] = useState([])
  useEffect(() => {
    setPaginas([])
    if (paginacion.totalPaginas !== 0) {
      for (let index = 0; index < paginacion.totalPaginas; index++) {
        setPaginas((paginas) => [...paginas, index + 1])
      }
    }
  }
  , [paginacion.totalPaginas])
  const handlePaginacionLeft = () => {
    if (paginacion.paginaActual > 1) {
      setPaginacion({ ...paginacion, paginaActual: paginacion.paginaActual - 1 })
    }
  }
  const handlePaginacionRight = () => {
    if (paginacion.paginaActual < paginacion.totalPaginas) {
      setPaginacion({ ...paginacion, paginaActual: paginacion.paginaActual + 1 })
    }
  }

  return (
    <div className="paginacion">
      <div onClick={handlePaginacionLeft}><Icono icon="left" /></div>
      {paginas.map((pagina) => (
        <div
          key={pagina}
          className={`pagina ${pagina === paginacion.paginaActual ? 'active' : ''}`}
          onClick={() => {
            if (pagina !== paginacion.paginaActual) {
              setPaginacion({ ...paginacion, paginaActual: pagina })
            }
          }}
        >
          {pagina}
        </div>
      ))}
      <div onClick={handlePaginacionRight}><Icono icon="right" /></div>
    </div>
  )
}
