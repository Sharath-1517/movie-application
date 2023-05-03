import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {

        setIsOpen(!isOpen);

    }

    useEffect(() => {

        const screen = () => {
            if(window.innerWidth > 600) {
                setIsOpen(false);
            }
            setScreenWidth(innerWidth);
        }
        
        window.addEventListener('resize', screen);
        
        return () => {
            window.removeEventListener('resize', screen);
        };
        
    }, []);
    

return (
    <Navbar bg="dark" variant="dark" expand="lg" className={
            screenWidth > 600 ? null : "responsive"
        }>
        <Container fluid>
            <Navbar.Brand href="/" 
            style={
                {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color:'gold',
                    textDecoration: "none",
                    fontSize: "1.5rem"
                }}>
                <FontAwesomeIcon icon ={faVideoSlash} className="icon"/>Gold
            </Navbar.Brand>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                <NavLink className ="nav-link" to="/">Home</NavLink>
                <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>      
                <div className="nav-btn">
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info">Register</Button>
                </div>
                </Nav>
            </Navbar.Collapse>
        </Container>
        <img src="/menu.png" alt="" className="burger-btn" onClick={onClickHandler}/>
        {(screenWidth < 600) && (isOpen) ? 
            <div className= {`responsive-${isOpen ? "nav-active" : "nav"}`}>
                <button variant="outline-info" className="responsive-nav-items">Login</button>
                <button variant="outline-info" className="responsive-nav-items">Register</button>
            </div>
            : null
        }
    </Navbar>
  )
}

export default Header