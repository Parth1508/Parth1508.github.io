import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../Images/Neofindesk-Logo.png';
import "../Css/navabar.css"


export class Pageheader1 extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbarClass" bg="dark" variant="dark"expand="lg">
                    <div className="container mb-navbar" style={{padding:"10px"}}>
                        <Navbar.Brand className="tb-navbar" href="/">
                            <img src={logo} className="App-logo" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" className="mb-navbar-button" />
                        <Navbar.Collapse  className="justify-content-end" id="navbarScroll">
                            <Nav  navbarScroll>
                                    <Nav.Link href="/">Product</Nav.Link>
                                    <Nav.Link href="/">Team</Nav.Link>
                                    <Nav.Link href="/">Book a Call</Nav.Link>
                                    <Nav.Link href="/">Member Login </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Pageheader1