import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "./api"; // Pastikan Anda memiliki fungsi getMovieDetails untuk mendapatkan detail film dari API
import NavBar from "./components/NavBar";

const Detailmvs = () => {
	const { detailId } = useParams();
	const [movieDetails, setMovieDetails] = useState(null);

	useEffect(() => {
		// Panggil fungsi API untuk mendapatkan detail film berdasarkan ID film (movieId)
		getMovieDetails(detailId).then((result) => {
			setMovieDetails(result);
		});
	}, [detailId]);

	if (!movieDetails) {
		return <div>Loading...</div>; // Tampilkan pesan loading selama data film sedang diambil dari API
	}

	const { poster_path, title, overview, vote_average, release_date } =
		movieDetails;

	const posterUrl = poster_path
		? `${process.env.REACT_APP_BASEIMGURL}/${poster_path}`
		: "https://via.placeholder.com/300"; // Ganti placeholder URL dengan URL gambar default jika poster tidak tersedia

	return (
		<>
			<NavBar />
			<div className="container mt-4">
				<div className="row">
					<div className="col-md-4">
						<img
							src={posterUrl}
							alt={title}
							className="img-fluid"
						/>
					</div>
					<div className="col-md-8">
						<h2>{title}</h2>
						<p>
							<strong>Rating:</strong> {vote_average}
						</p>
						<p>
							<strong>Release Date:</strong> {release_date}
						</p>
						<p>
							<strong>Overview:</strong> {overview}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Detailmvs;
