import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = ({ change, search, changePath, path, newZip }) => {
  const history = useHistory();

  useEffect(() => {
    changePath('/');
  }, []);

  return (
    <div className="it-header-container">
      <header className="it-header">
        <Navbar bg="dark" variant="dark">
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className="logo-container">
                <img className="it-logo" src="../../assets/alcove.jpg" alt="Alcove Logo" />
                <span className="logo-text">Alcove</span>
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <IndexLinkContainer to="/">
              <Nav.Link onClick={() => changePath('/')}>Home</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/features">
              <Nav.Link onClick={() => changePath('/features')}>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/teams">
              <Nav.Link onClick={() => changePath('/teams')}>Our Team</Nav.Link>
            </LinkContainer>
          </Nav>
          {path !== '/' ? (
            <Form inline>
              <FormControl
                type="text"
                placeholder="Enter zip code"
                className="mr-sm-2 it-search"
                value={newZip}
                maxLength="5"
                onChange={event => {
                  change(event.target.value);
                }}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    const shouldRoute = search();
                    if (shouldRoute) {
                      history.push('/results');
                      changePath('/results');
                    }
                  }
                }}
              />
              <Button
                id="nav-search-button"
                className="it-btn-header it-btn-primary"
                onClick={() => {
                  const shouldRoute = search();
                  if (shouldRoute) {
                    history.push('/results');
                    changePath('/results');
                  }
                }}
              >
                Find Spaces/Items
              </Button>
              <LinkContainer to="/post">
                <Button variant="info" className="it-btn-header it-btn-secondary">
                  Post a Space/Item
                </Button>
              </LinkContainer>
            </Form>
          ) : null}
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
