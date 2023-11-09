import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Event.css"

export default function EventNav() {
  return (
    <>
    <div className='EventNavContainer'>
      <Link to={'/events/concerts/'} className='NavC'>CONCERTS</Link>
      <Link to={'/events/corporate/'} className='NavC'>CORPORATE EVENTS</Link>
      <Link to={'/events/conferences/'} className='NavC'>CONFERNCES</Link>
      <Link to={'/events/activations/'} className='NavC'>ACTIVATIONS</Link>
    </div>
    </>
  )
}
