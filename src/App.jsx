import './App.css'
import { useRef } from 'react'

import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'



function App() { 
const { movies: mappedMovies } = useMovies()
const inputRef = useRef()

const handleSubmit = (event) => {
  event.preventDefault()
  const inputEl = inputRef.current
  const value = inputEl.value
  console.log(value)
}

  return (
    <div className='page'>
    <header>
      <h1>Buscador de Peliculas</h1>
      <form className='form' action="" onSubmit={handleSubmit}>
          <input  ref={inputRef} type="text" />
          <button type='submit'>Buscar</button>
      </form>
    </header>

    <main>
      <Movies movies={mappedMovies}/>
    </main>
    </div>
  )
}

export default App
