/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Context = React.createContext({})

export function MensajesContext({ children }) {
  const [mensajesContext, setMensajesContext] = useState([])
  return <Context.Provider value={{ mensajesContext, setMensajesContext }}>
    {children}
  </Context.Provider>
}

export default Context
