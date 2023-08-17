import React from "react"

const Card = ({nombre, apellido}) => {

    return (
      <div className='card'>
          <h3>Hola {nombre} {apellido}!</h3>
          
      </div>
    )

}

export default Card