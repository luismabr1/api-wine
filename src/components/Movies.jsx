/* eslint-disable react/prop-types */

function ListOfMovies ({movies}) {
    return (
        <>
          <ul className="movies">
            {
              movies.map(movie=>(
                  <div key={movie.id} className="movie">
                      <h3>{movie.title}</h3>
                      <p>{movie.year}</p> 
                      <li className="movie-items" >
                        <img src={movie.poster} alt={movie.title} />
                      </li>
                  </div>
              ))
            }
          </ul>
        </>
    );
}

function NoMoviesResult(){
    return(
        <p>
            No se encontraron peliculas
        </p>
    )
}

export function Movies({movies}){
    const hasMovies= movies?.length > 0
    return(
        hasMovies
        ? (
            <ListOfMovies movies={movies} />
        )
        : (
            <NoMoviesResult />
        )
    )
}



