import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<Navbar expand="lg" className="bg-transparent nav">
			<Container>
				<Navbar.Brand href="#home" className="text-danger fw-bold">
					<Link to="/" className="">MovieList</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Container className="btn-container">
					<Button
						variant="outline-danger"
						className="btn rounded-pill float-right"
					>
						Login
					</Button>
					{""}
					<Button variant="danger" className=" btn rounded-pill">
						Register
					</Button>{" "}
				</Container>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className=""></Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
