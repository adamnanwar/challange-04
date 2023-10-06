import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL
const detailMovie = process.env.REACT_APP_MOVIEDETAIL

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}

export const getMovieDetails = async (detailId) => {
    const response = await axios.get(`${detailMovie}${detailId}?api_key=${apiKey}`);
    return response.data;
  };

// export const carouselImg = async () => {
//     const movie = await axios.get(`${baseUrl}/movieoriginal${detailMovie?.backdrop_path}`)
//     return movie.data.results
// }