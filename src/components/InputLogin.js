import React, { useEffect, useState } from 'react'

export default function InputsLogin({ type, name, limpiarCampos, setLimpiarCampos }) {
  const [value, setValue] = useState('')
  useEffect(() => {
    if (limpiarCampos) {
      setValue('')
    }
  }, [limpiarCampos])
  useEffect(() => {
    if (value.length > 0) {
      setLimpiarCampos(false)
    }
  }, [value])
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={name}
      required
    ></input>
  )
}
