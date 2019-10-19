import React from 'react';
import './menubar.scss';
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap';


class MenuBar extends React.Component{
  render(){
    return(
      <React.Fragment>
          <Navbar bg="" expand="lg">
            <Navbar.Brand href="#home" className="logo">SKYSTAR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/product">Product</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-dark" className="chukhung">Search</Button>
                <Button variant="outline-dark" className="ml-2 chukhung" href="/login">Login</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
      </React.Fragment>
    )
  }
}

export default MenuBar