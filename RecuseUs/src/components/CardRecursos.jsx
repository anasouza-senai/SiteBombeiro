import React from 'react'
import "../App.css";

const CardRecursos = (props) => {
  return (
    <div className='cardRecursos p-1'>
        <h4>{props.subtitulo}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default CardRecursos
