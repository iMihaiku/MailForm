import React from 'react'
import Avatar from '../components/Avatar'
import Icono from '../components/Icono'

export default function Header() {
  const src = process.env.PUBLIC_URL + '/images/logo.png'
  const handleLogOut = () => {
    window.localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <header className='header_main'>
      <div className="logo">
        <img src={src} />
        <label> MailForm </label>
      </div>
      <div className="parameters">
        <div><Icono icon="help" /></div>
        <div><Icono icon="config" /></div>
        <div onClick={handleLogOut} ><Avatar /></div>
      </div>
    </header>
  )
}
