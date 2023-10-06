import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import slides from "./mock.json";
import Slider from "./components/Slider";
import { Link} from "react-router-dom";

const App = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	// const [selectedMovie, setSelectedMovie] = useState({});

	useEffect(() => {
		getMovieList().then((result) => {
			setPopularMovies(result);
		});
		// setSelectedMovie(query[0]);
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
				<button className="Movie-wrapper mt-0" key={i}>
					<Link to={`/detail/${movie.id}`}>
						<img src={posterPath} alt="" className="Movie-img" />
					</Link>
				</button>
			);
		});
	};

	return (
		<div className="App position-relative bg-light">
			{/* <Routes>
				<Route path="/Detailmvs" element={<Detailmvs />} />
				<Route path="/" element={<App />} />
			</Routes> */}
			<NavBar />
			<InputGroup className="w-25 Movie-search">
				<Form.Control
					className="rounded-pill bg-transparent border-danger text-danger fa6"
					placeholder="Search movies ..."
					aria-label="Search"
					aria-describedby="basic-addon1"
					onChange={({ target }) => search(target.value)}
				/>
			</InputGroup>
			<Slider slides={slides} />
			<h3 className="text-start ms-4 fs-5 mt-3 head-1 text-dark">
				Popular Movie
			</h3>
			<h3 className="text-end text-danger me-4 fs-6 head-2">
				Show All Movie
			</h3>
			<div className="Movie-container">
				<PopularMovieList />
			</div>
		</div>
	);
};

export default App;
