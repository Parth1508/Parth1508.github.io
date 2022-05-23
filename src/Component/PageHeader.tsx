import React, { Component } from 'react'
// import "../Css/navabar.css"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import logo from '../Images/Neofindesk-Logo.png';

 class PageHeader extends Component {
  render() {
    return (
		<div className='Pageheader-maindiv'>	
    
    
		<Navbar bg="light" expand="lg" className='page-header-nav'>
  {/* <Container>	 */}
  <Navbar.Brand className="tb-navbar" href="/">
                            <img src={logo} className="pageheader-logo" alt="logo" />
                        </Navbar.Brand>
   
      <Nav className="pageheader-data">   
        <Nav.Link  href="/" className="pageheader-links" >Product</Nav.Link>
        <Nav.Link  href="/" className="pageheader-links">Team</Nav.Link>
        <Nav.Link href="/" className="pageheader-links">Book a call</Nav.Link>
        <Nav.Link href="/" className="pageheader-links">Member Login</Nav.Link>
      
      </Nav>
  {/* </Container> */}
</Navbar>
		
	</div>
    )
  }
}

export default PageHeader