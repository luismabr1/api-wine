import './App.css'
import responseMovies from './mocks/with-result.json'
import withoutResults from './mocks/no-result.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies= movies?.length > 0
  return (
    <div className='page'>
    <header>
      <h1>Buscador de Peliculas</h1>
      <form className='form' action="">
          <input type="text" />
          <button type='submit'>Buscar</button>
      </form>
    </header>

    <main>
      {
        hasMovies
        ? (
          <ul>
            {
              movies.map(movie=>(
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))
            }
          </ul>
        )
        : (
          <p>No se encontraron peliculas</p>
        )
      
      }
    </main>
    </div>
  )
}

export default App
