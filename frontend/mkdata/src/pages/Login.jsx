import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail, validatePassword } from '../util/validations';
import { Link } from 'react-router-dom';

function Login() {

  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (validateEmail(email) && validatePassword(password)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [password, email]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </Form.Group>
      <Link to="/home">
        <Button
          variant="primary"
          type="submit"
          disabled={ isDisable }
        >
          Submit
        </Button>
      </Link>
    </Form>
  );
}

export default Login