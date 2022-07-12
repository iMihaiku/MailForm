import React, { useState } from 'react'
import login from 'services/login'
import InputLogin from 'components/InputLogin'
import { Link } from 'react-router-dom'
import CheckPassword from 'components/CheckPassword'
import ErrorLogin from 'components/ErrorLogin'

export default function Login() {
  const [toggleTypeInput, setToggleTypeInput] = useState('password')
  const [limpiarCampos, setLimpiarCampos] = useState(false)
  const [error, setError] = useState([])

  const src = process.env.PUBLIC_URL + '/images/logo.png'

  const handleLogin = async(e) => {
    e.preventDefault()
    const password = e.target.Password.value
    const username = e.target.Username.value
    const response = await login({ username, password })
    if (response.token) {
      window.localStorage.setItem('user', JSON.stringify(response))
      window.location.reload()
    } else {
      setLimpiarCampos(true)
      setError([...error, response.error])
    }
  }
  return (
    <div className="content">
      <div className="loginFormContent">
        <div className="loginForm">
          <header>
            <label>Iniciar sesión</label>
            <Link className="loginLink" to="/lostPassword">
              <label> ¿Olvidaste tu contraseña? </label>
            </Link>
          </header>
          <form onSubmit={handleLogin}>
            <div className="logo">
              <img src={src} />
            </div>
            <div className="logo">
              <label>
                {' '}
                Iniciar Sesion <br />
                <label className="subIndice">en MailForm</label>{' '}
              </label>
            </div>

            <div className="inputsLogin">
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
            <p className="conditionTerms">
              Antes de usar esta aplicación, puedes leer la política de
              privacidad y los términos del servicio de MailtForm.
            </p>
            <div className="submit">
              <Link className="loginLink" to="/registro">
                <label> Crear cuenta </label>
              </Link>
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
