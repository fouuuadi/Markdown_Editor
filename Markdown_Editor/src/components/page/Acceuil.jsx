import React from 'react'
import ShowTime from '../api/ShowTime'
import QuoteOfTheDay from '../api/QuoteOfTheDay'


//render
function Acceuil() {
  return (
    <div>
      <h1>Hello Fouad</h1>
      <h2>API</h2>
      <ShowTime/>
      <QuoteOfTheDay/>
    </div>
  )
}

export default Acceuil
