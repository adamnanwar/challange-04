import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";

const App = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		getMovieList().then((result) => {
			setPopularMovies(result);
		});
	}, []);
	const search = async (q) => {
		if (q.length > 3) {
			const query = await searchMovie(q);
			console.log({ query: query });
			setPopularMovies(query.results);
		}
	};

	const PopularMovieList = () => {
		return popularMovies.map((movie, i) => {
			const posterPath = movie.poster_path
				? `${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`
				: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sSOysRnmDLJmSWNGbr9gbc9jvOu.png";

			return (
				<div className="Movie-wrapper" key={i}>
					<div className="Movie-title">{movie.title}</div>
					<img src={posterPath} alt="" className="Movie-img" />
				</div>
			);
		});
	};

	return (
		<div className="App">
			<NavBar />
			<h1>MovieList</h1>
			<div className="Movie-container">
				<PopularMovieList />
			</div>
		</div>
	);
};

export default App;
