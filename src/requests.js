
const key = '4f2fa4e33969f039609ddec275d56387'

const requests = {
    popular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1&include_adults=false`,
    topRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&include_adults=false`,
    upcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1&include_adults=false`,
   

}


export default requests 


