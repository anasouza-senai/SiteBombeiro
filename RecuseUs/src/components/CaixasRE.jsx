import React from 'react'

const CaixasRE = (props) => {

  return (
   <div className='caixa-re'>
      <div className='circulo'>{props.iconCRE}</div>
      <h5>{props.subtituloCRE}</h5>
      <p>{props.textoCRE}</p>
   </div>
  )
}

export default CaixasRE
