import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>Buscador de Peliculas</h1>
      <form className='form' action="">
          <input type="text" />
          <button type='submit'>Buscar</button>
      </form>
    </header>

    <main>
      Aqui van los resultados
    </main>
    </>
  )
}

export default App
