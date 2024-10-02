import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";
import {useState, useCallback} from 'react'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading, } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback( debounce( search => {
    getMovies({ search })
  }, 300)
  , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({search});
  };

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  };
  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" action="" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="query"
            type="text"
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p>: <Movies movies={movies} />
        }
        
      </main>
    </div>
  );
}

export default App;
