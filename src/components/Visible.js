import React, { useState } from 'react'

export default function Visible({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState('false')
  const hiddenWhenVisible = {
    display: visible ? 'none' : ''
  }
  const visibleWhenVisible = {
    display: visible ? '' : 'none'
  }

  return (
    <div>
      <div style={hiddenWhenVisible}>
        <p>Hola</p>
      </div>
      <div style={visibleWhenVisible}>
        <div>{children}</div>
      </div>
    </div>
  )
}
