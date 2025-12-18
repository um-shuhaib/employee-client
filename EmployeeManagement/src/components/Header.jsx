import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className='text-decoration-none'>
            <i className="fa-solid fa-user-doctor fa-xl"></i>{' '}
            EMP Management</Link>
          </Navbar.Brand>
          <Link to={'add'} className='btn btn-warning' >Add</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header