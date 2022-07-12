import React, { useState, useEffect } from 'react'

export default function ErrorLogin({ mensajeError }) {
  const [visible, setVisible] = useState('hidden')
  useEffect(() => {
    if (mensajeError) {
      setVisible('visible')
      setTimeout(() => {
        setVisible('hidden')
      }, 5000)
    }
  }, [mensajeError])
  return (
    <p className="credencialesIncorrectas" style={{ visibility: visible }}>
      {mensajeError.at(-1)}
    </p>
  )
}
