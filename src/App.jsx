import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault()
   

    if(nombre.length >= 3 && nombre === nombre.trim() && apellido.length >= 6) {
        setShow(true)
        setError(false)
    } else {
        setShow(false)
        setError(true)
    }
}


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Ingresa Tus Datos:</h2>
          <label>Nombre:</label>
          <input onChange={(event) => setNombre(event.target.value)}/>
          <br></br>
          <label>Apellido:</label>
          <input onChange={(event) => setApellido(event.target.value)}/>
          <br></br><br></br>
          <button>Verificar</button>
        </form>
      </div>

      {error && <><h6>Vuelve A Intentarlo </h6></>}
      {show ? <>

        <Card nombre={nombre} apellido={apellido}/>

        </>
        : null
      }


    </>
  )
}

export default App