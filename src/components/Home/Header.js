import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/img/avatar.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
      <Navbar className="header fixed-top" expand="lg" style={{ backgroundColor: 'white', paddingTop: '10px', paddingBottom: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        {/* class container different container-fluid: padding */}
        {/* fuild md: larger md => keep fluid */}
        {/* if fluid: full */}
        <Container fluid="md">
          
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" style={{ color: 'blue', fontWeight: 'bold', fontSize:'25px' }}>Job Aboard</Navbar.Brand>

          {/* Toggle button for mobile */}
          <Navbar.Toggle aria-controls="navbarScroll" />

          {/* Collapse for navigation items */}
          <Navbar.Collapse id="navbarScroll">
            
            {/* Left-side navigation (optional) */}
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/company">Company</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>

            {/* Right-side navigation */}
            <Nav className="ms-auto d-flex align-items-center" style={{ maxHeight: '100px' }} navbarScroll>

              {/* Recruiter section */}
              <Nav className="text-center" style={{ marginRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ margin: 0, fontSize: '14px', color: 'gray' }}>Bạn là nhà tuyển dụng?</p>
                <Nav.Link href="/dang-tuyen" style={{ textDecoration: 'none', color: '#007bff', fontSize: '16px', margin: 0, paddingTop:'0px' }} className='p-0'>Đăng tuyển ngay</Nav.Link>
              </Nav>


              {/* Divider */}
              <div className="column-divider" style={{ width: '1px', height: '40px', backgroundColor: '#ddd', marginRight: '20px' }}></div>

              {/* Notification icon */}
              <Nav style={{ marginRight: '20px' }}>
                <FontAwesomeIcon icon={faBell} style={{ fontSize: '24px', color: '#007bff' }} />
              </Nav>

              {/* Avatar and dropdown button */}
              <Nav className="d-flex align-items-center">
                <img src={avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    marginLeft: '5px',
                    padding: '0'
                  }}
                  onClick={() => console.log("Dropdown menu clicked")}
                >
                  <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: '16px', color: '#007bff' }} />
                </button>
              </Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
};
export default Header;