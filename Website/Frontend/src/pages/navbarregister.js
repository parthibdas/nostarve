import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './navbarregister.css'
import styles from "./Home/styles.module.css";


function Navbarregister(props) {
    const logout = () => {
        window.open(`http://localhost:8080/auth/logout`, "_self");
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div className='navy'>
                    <div className='logo'><img src="https://res.cloudinary.com/dosofpk8l/image/upload/v1677935337/No_starve__2_-removebg-preview_yv01rg.png" width="40" height="40" alt="" /></div>
                    <div className='name'> <Navbar.Brand href="#home"> No Starve</Navbar.Brand></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Contact Us</Nav.Link>
                            <NavDropdown title="More Info" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Hungry</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Statistics</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Our Service
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='signbutton'>
                    <div className='p1' >welcome {props.username}!</div>
                    <div className='p2'><img src={props.pic} alt='pic'/>
                    </div>
                {/* <div className='b1'><a href='/signup'><Button variant="primary">Sign Up</Button> </a>{' '}</div>
                <div className='b2'><a href='/login'> <Button variant="success">Log In</Button></a>{' '}</div> */}
                <div className='but'><button  className={styles.btn1001} onClick={logout} >
                Log Out
            </button></div>
                </div>
            </Container>
        </Navbar>
    )
}
export default Navbarregister;