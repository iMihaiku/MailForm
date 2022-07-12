import React, { useState } from 'react'
import MenuItem from '../components/Menu-item'

export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  const [selectedState, setSelected] = useState(window.location.pathname)
  return (
    <div className="sideMenu">
      <p className='subtitle'>Actividad de mensajeria</p>
      <MenuItem name="Todos los mensajes" type="normalSize" setSelected={setSelected} selectState={selectedState} path='/' icon='mail'/>
      <MenuItem name="Mensajes favoritos" type="normalSize" setSelected={setSelected} selectState={selectedState} path='/favoritos' icon='favorito'/>
      <p className='subtitle'>Configuracion API</p>
      <MenuItem name="Administrar API" type="normalSize" setSelected={setSelected} selectState={selectedState} path='/setAPI' icon='admin'/>
      <MenuItem name="Configurar API" type="normalSize" setSelected={setSelected} selectState={selectedState} path='/configAPI' icon='config'/>
      <MenuItem name="Informacion y ayuda" type="normalSize" setSelected={setSelected} selectState={selectedState} path='/infoAPI' icon='help'/>
    </div>
  )
}
