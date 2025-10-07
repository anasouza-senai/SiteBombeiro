import React from 'react'

const CaixasCP = (props) => {
  return (
   <div className='caixa-cp'>

      <div className='cinco-estrelas mb-2'>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      </div>

      <p className='mb-4'>{props.textoCCP}</p>
      <h5>{props.bombeiroCCP}</h5>
      <p>{props.lugarCCP}</p>
   </div>
  )
}

export default CaixasCP
