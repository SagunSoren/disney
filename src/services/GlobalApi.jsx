import axios from "axios";

const api_key = "2b7d4e633ca0770d390fbe0dcf20f271"

const movieByGenreURL = "https://api.themoviedb.org/3/discover/movie"


const movieBaseUrl="https://api.themoviedb.org/3"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2b7d4e633ca0770d390fbe0dcf20f271';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}