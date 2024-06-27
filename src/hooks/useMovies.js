import responseMovies from '../mocks/with-result.json'
import withoutResults from '../mocks/no-result.json'

export function useMovies(){
    const movies = responseMovies.Search
    //manejo el contrato de lo que trae la api
      const mappedMovies = movies?.map(movies =>({
        id: movies.imdbID,
        title: movies.Title,
        year: movies.Year,
        poster: movies.Poster
      }))
  
      return {movies: mappedMovies}
  }