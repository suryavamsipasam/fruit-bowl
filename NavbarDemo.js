import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Home-Page/Home';
import AboutUs from './About-Page/AboutUs';
import LoginForm from './Login-page/LoginForm';
import Mainpage from './Mainpage';
import './NavbarStyles.css';
import logo2 from './logo2.png'
import Products from './Products-Page/Products';
export default function NavbarDemo(){
    return(
      <Router>
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Nav>
                    <Navbar.Brand className="navbar-brand">
                        <img className="logo-styles" src={logo2} alt="Logo" />
                        <Link className="nav-link" to="/Mainpage">
                            The Fruit Bar
                        </Link>
                    </Navbar.Brand>

                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" id="nav-space">
                        <Link className="nav-link" to="/Home">Home</Link>
                        <Link className="nav-link" to="/AboutUs">About Us</Link>
                        <Link className="nav-link" to="/Products">Fruit Bowls</Link>
                        <Link className="nav-link" to="/LoginForm">Login</Link>
                        <Link className="nav-link" to="/"></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    <Routes>
          
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Products" element={<Products />}/>
        <Route exact path="/LoginForm" element={<LoginForm />} />
        <Route exact path="/Mainpage" element={<Mainpage />} />
        <Route exact path="/" element={<Mainpage />} />
          

        </Routes>
      </Router>
    );
}

