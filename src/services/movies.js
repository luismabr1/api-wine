const API_KEY= '7aa0fe51'
export const searchMovies = async ({search}) =>{
    if (search === '') return null
    console.log(search)
    try{
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        console.log(response)
        const movies = await json.Search
            //manejo el contrato de lo que trae la api
      return movies?.map(movies =>({
        id: movies.imdbID,
        title: movies.Title,
        year: movies.Year,
        poster: movies.Poster
      }))
    } catch (e){
        throw new Error('Error searching movies')
    }
}