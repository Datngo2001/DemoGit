import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import * as types from "../store/auth/authActionTypes";

function NavigationBar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: types.LOGOUT_REQUEST,
    });
  };

  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand href="/">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="px-2">
              Home
            </NavLink>
            <NavLink to="/todo" className="px-2">
              Todo
            </NavLink>
            <NavLink to="/profile" className="px-2">
              Profile
            </NavLink>
          </Nav>
          {user ? (
            <Button variant="outline-primary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="outline-success">Login</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
