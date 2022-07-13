import React, { useState } from 'react';
import { Form, Col, Row, Alert, Button } from 'react-bootstrap';
import { postClientePf, postClientePj } from '../api/Request';

function Register() {
  const [hidden, setHidden] = useState(true);
  const [cpfHidden, setCpfHidden] = useState(false);
  const [rgHidden, setRgHidden] = useState(false);
  const [cnpjHidden, setCnpjHidden] = useState(true);
  const [ieHidden, setIeHidden] = useState(true);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [tipo, setTipo] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [ie, setIe] = useState('');
  const [grupo, setGrupo] = useState('');
  const [status, setStatus] = useState('');

  const getInitialState = () => {
    const value = "Pessoa física";
    return value;
  }

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "Pessoa física") {
      setCpfHidden(false);
      setRgHidden(false);
      setCnpjHidden(true);
      setIeHidden(true);
    } else if (e.target.value === "Pessoa jurídica") {
      setCnpjHidden(false);
      setIeHidden(false);
      setCpfHidden(true);
      setRgHidden(true);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    setName(form.name.value);
    setTipo(form.tipo.value);
    setGrupo(form.grupo.value);
    setStatus(form.status.value);
    if (!cpfHidden) {
      setCpf(form.cpf.value);
      setRg(form.rg.value);
    }
    setCnpj(form.cnpj.value);
    setIe(form.ie.value);

    try {
      if (!cpfHidden) {
        const response = await postClientePf(
          name,
          tipo,
          cpf,
          rg,
          grupo,
          status
        );
        return response;
      }
      const response = await postClientePj(
        name,
        tipo,
        cnpj,
        ie,
        grupo,
        status
      );
      return response;
    } catch (error) {
      setMessage(error.response.data);
    }
  }

  return (
    <>
      <Form id="form" className="mb-3">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label>Nome:</Form.Label>
            <Form.Control name="name" placeholder="Digite o nome do cliente" required />
          </Col>
          <Col xs="auto">
            <Form.Label>Tipo de cliente:</Form.Label>
            <Form.Select
              name="tipo"
              value={ value }
              onChange={ handleChange }
              required
            >
              <option value="Pessoa física">Pessoa física</option>
              <option value="Pessoa jurídica">Pessoa jurídica</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Label hidden={ cpfHidden }>Cpf:</Form.Label>
            <Form.Control
              name="cpf"
              id="cpf"
              placeholder="Digite o Cpf do cliente"
              hidden={ cpfHidden }
              required
            />
          </Col>
          <Col xs="auto">
            <Form.Label hidden={ cnpjHidden }>Cnpj:</Form.Label>
            <Form.Control
              name="cnpj"
              id="cnpj"
              placeholder="Digite o Cnpj do cliente"
              hidden={ cnpjHidden }
              required
            />
          </Col>
          <Col xs="auto">
            <Form.Label hidden={ rgHidden }>Rg:</Form.Label>
            <Form.Control
              name="rg"
              id="rg"
              placeholder="Digite o RG do cliente"
              hidden={ rgHidden }
              required
            />
          </Col>
          <Col xs="auto">
            <Form.Label hidden={ ieHidden }>Ie:</Form.Label>
            <Form.Control
              name="ie"
              id="ie"
              placeholder="Digite o ie do cliente"
              hidden={ ieHidden }
              required
            />
          </Col>
          <Col xs="auto">
            <Form.Label>Grupo do cliente:</Form.Label>
            <Form.Select name="grupo">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Check
              name="status"
              type="switch"
              id="custom-switch"
              label="Cliente ativo"
            />
          </Col>
          <Col xs="auto">
            <Button
              type="button"
              variant="success"
              size="lg"
              onClick={ (e) => handleClick(e) }
            >
              Cadastrar
            </Button>
          </Col>
        </Row>
      </Form>
      {!hidden && (
        <Alert variant="danger" onClose={ () => setHidden(true) } dismissible>
          <Alert.Heading>Ops! Something wrong does not right...</Alert.Heading>
          <span data-testid="common_register__element-invalid_register">
            {message}
          </span>
        </Alert>
      )}
    </>
  )
}

export default Register