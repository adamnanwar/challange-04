import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";

function NavBar() {
    const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		getMovieList().then((result) => {
			setPopularMovies(result);
		});
	}, []);

	const search = async (q) => {
		if (q.length > 3) {
			const query = await searchMovie(q);
            console.log({query : query})
			setPopularMovies(query.results);
		}
	};
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<InputGroup className="">
					<Form.Control
						placeholder="Search movies ..."
						aria-label="Search"
						aria-describedby="basic-addon1"
						onChange={({ target }) => search(target.value)}
					/>
				</InputGroup>
				<Button variant="outline-danger" className="rounded-pill">
					Login
				</Button>{" "}
				<Button variant="danger" className="rounded-pill">
					Register
				</Button>{" "}
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto"></Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
