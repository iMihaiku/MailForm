import React from 'react'

export default function Avatar({ params }) {
  const src = process.env.PUBLIC_URL + '/images/avatar_default.jpg'
  return <img src={src} />
}

// create a react component
