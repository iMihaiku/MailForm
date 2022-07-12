/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import InputLogin from 'components/InputLogin'
import { Link } from 'react-router-dom'
import CheckPassword from 'components/CheckPassword'
import registro from 'services/registro'
import login from 'services/login'
import ErrorLogin from 'components/ErrorLogin'

export default function RegistroUsuario() {
  const [limpiarCampos, setLimpiarCampos] = useState(false)
  const [error, setError] = useState([])
  const [toggleTypeInput, setToggleTypeInput] = useState('password')
  const src = process.env.PUBLIC_URL + '/images/logo.png'

  const handleRegistro = async(e) => {
    e.preventDefault()
    const password = e.target.Password.value
    const username = e.target.Username.value
    const nickname = e.target.Nickname.value

    if (password.length < 0 || username.length < 0 || nickname.length < 0) {
      setError([...error, 'Todos los campos son obligatorios'])
      setLimpiarCampos(true)
    } else {
      setError([])
      const responseRegister = await registro({ username, nickname, password })
      if (responseRegister.error) {
        setError([...error, responseRegister.error])
        setLimpiarCampos(true)
      } else {
        const responseLogin = await login({ username, password })
        window.localStorage.setItem('user', JSON.stringify(responseLogin))
        window.location.replace('/')
      }
    }
  }
  const handleRecuperar = () => {
    console.log('Recuperar')
  }
  return (
    <div className="content">
      <div className="loginFormContent">
        <div className="loginForm">
          <header>
            <label>Iniciar sesión</label>
            <Link
              className="loginLink"
              to="/lostPassword"
              onClick={handleRecuperar}
            >
              <label> ¿Olvidaste tu contraseña? </label>
            </Link>
          </header>
          <form onSubmit={handleRegistro}>
            <div className="logo">
              <img src={src} />
            </div>
            <div className="logo">
              <label>
                Iniciar Sesion <br />
                <label className="subIndice">en MailForm</label>{' '}
              </label>
            </div>
            <div className="inputsLogin">
              <InputLogin
                type="text"
                name="Nickname"
                limpiarCampos={limpiarCampos}
                setLimpiarCampos={setLimpiarCampos}
              />
              <InputLogin
                type="text"
                name="Username"
                limpiarCampos={limpiarCampos}
                setLimpiarCampos={setLimpiarCampos}
              />
              <InputLogin
                type={toggleTypeInput}
                name="Password"
                limpiarCampos={limpiarCampos}
                setLimpiarCampos={setLimpiarCampos}
              />
              <CheckPassword setToggleTypeInput={setToggleTypeInput} />
            </div>
            <ErrorLogin mensajeError={error} />
            <div className="submit">
              <Link className="loginLink" to="/" onClick={handleRecuperar}>
                <label> ¿Ya tienes una cuenta? </label>
              </Link>
              <button type="submit">¡Registrate!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
