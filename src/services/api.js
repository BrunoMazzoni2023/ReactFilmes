import axios from "axios";

//https://api.themoviedb.org/3/movie/550?api_key=06d44c43498a48bdff7e17b8a0069038

// BASE DA API   https://api.themoviedb.org/3/
//    URL DA API: /movie/157336?api_key=06d44c43498a48bdff7e17b8a0069038&append_to_response=videos,images

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;