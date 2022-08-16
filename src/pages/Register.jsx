import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import useInput from "../hooks/useInput";
import * as types from "../store/auth/authActionTypes";
import { useEffect } from "react";

function Register() {
  const [email, updateEmail] = useInput("");
  const [password, updatePassword] = useInput("");

  const { registerSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // navigate to login page when register successful
    if (registerSuccess) {
      navigate("/login");
    }
  }, [registerSuccess]);

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("Login", { email, password });
    dispatch({
      type: types.REGISTER_REQUEST,
      payload: {
        email,
        password,
      },
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <h1 className="text-center">Register</h1>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={updateEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleRegister}>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
