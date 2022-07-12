import React from 'react'

export default function CheckPassword({ setToggleTypeInput }) {
  const handleShowPass = (e) => {
    if (e.target.checked) {
      setToggleTypeInput('text')
    } else {
      setToggleTypeInput('password')
    }
  }
  return (
    <div className="mostrarPass">
      <input type="checkbox" onChange={handleShowPass} />
      <label>Mostrar contraseña</label>
    </div>
  )
}
