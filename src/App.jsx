import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useState } from 'react'
import { useRef } from 'react'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    //valido para que el primer render no me valide y lance error de input vacio
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() { 
const { movies: mappedMovies } = useMovies()
const { search, updateSearch, error } = useSearch()


const handleSubmit = (event) => {
  //sin necesidad de useRef consigo los inpus de n formularios si los quisiera
  event.preventDefault()
/*   const fields = Object.fromEntries(new window.FormData(event.target))
  const {query} = Object.fromEntries(new window.FormData(event.target)) */

  console.log({query})
}

const handleChange = (event) => {
  updateSearch(event.target.value)
}
  return (
    <div className='page'>
    <header>
      <h1>Buscador de Peliculas</h1>
      <form className='form' action="" onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} 
          onChange={handleChange} value={search} name='query' type="text" />
          <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </header>

    <main>
      <Movies movies={mappedMovies}/>
    </main>
    </div>
  )
}

export default App
