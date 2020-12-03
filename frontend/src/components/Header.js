import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <image
            src={'/images/logo2.bmp'}
            className='logo-text-white logo-large'
            fluid
          />
          <LinkContainer to='/'>
            <Navbar.Brand>Ayman Hamoda</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/youtubes'>
                <Nav.Link>
                  <i className='fas fa-play'></i> Youtube
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/courses'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Courses
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/dropcalc'>
                <Nav.Link>
                  <i className='fas fa-calculator'></i> Drop Calc.
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/#about'>
                <Nav.Link>
                  <i className='fas fa-user'></i> About
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
