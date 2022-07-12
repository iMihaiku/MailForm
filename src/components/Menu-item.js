import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icono from './Icono'

export default function MenuItem({ name, type, icon, setSelected, selectState, path }) {
  const [selected, setSelectedState] = useState('unSelected')
  useEffect(() => {
    selectState === path ? setSelectedState('selected') : setSelectedState('unSelected')
  }
  , [selectState])

  const handleClick = () => {
    if (selected === 'unSelected') {
      setSelected(path)
    }
  }

  return (
    <Link
      to={path}
      className={`menuItem ${type} ${selected} `}
      onClick={handleClick}
    >
      <div><Icono icon={icon} /></div>
      <label> {name} </label>
    </Link>
  )
}
