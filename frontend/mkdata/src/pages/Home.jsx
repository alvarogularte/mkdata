import React, { useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import { postClientePf, postClientePj } from '../api/Request';

function Home() {
  const [hidden, setHidden] = useState(true);
  const [cpfHidden, setCpfHidden] = useState(false);
  const [rgHidden, setRgHidden] = useState(false);
  const [cnpjHidden, setCnpjHidden] = useState(true);
  const [ieHidden, setIeHidden] = useState(true);
  const [message, setMessage] = useState('');

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

  const handleSubmit = async (e) => {
    const formRegister = e.target;
    const nomeRegister = formRegister.nome.value;
    const tipoRegister = formRegister.tipo.value;
    const documento1 = formRegister.documento1.value;
    const documento2 = formRegister.documento2.value;
    const grupo = formRegister.grupo.value;
    const status = formRegister.status.value;

    try {
      if (setCpfHidden(false)) {
        const response = await postClientePf(
          nomeRegister,
          tipoRegister,
          documento1,
          documento2,
          grupo,
          status
        );
        return response;
      } else {
        const response = await postClientePj(
          nomeRegister,
          tipoRegister,
          documento1,
          documento2,
          grupo,
          status
        );
        return response;
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  }

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nome:</Form.Label>
        <Form.Control name="nome" placeholder="Digite o nome do cliente" required />
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
        <Form.Label hidden={ cpfHidden }>Cpf:</Form.Label>
        <Form.Control
          name="documento1"
          id="cpf"
          placeholder="Digite o Cpf do cliente"
          hidden={ cpfHidden }
          required
        />
        <Form.Label hidden={ cnpjHidden }>Cnpj:</Form.Label>
        <Form.Control
          name="documento1"
          id="cnpj"
          placeholder="Digite o Cnpj do cliente"
          hidden={ cnpjHidden }
          required
        />
        <Form.Label hidden={ rgHidden }>Rg:</Form.Label>
        <Form.Control
          name="documento2"
          id="rg"
          placeholder="Digite o RG do cliente"
          hidden={ rgHidden }
          required
        />
        <Form.Label hidden={ ieHidden }>Ie:</Form.Label>
        <Form.Control
          name="documento2"
          id="ie"
          placeholder="Digite o ie do cliente"
          hidden={ ieHidden }
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Grupo do cliente:</Form.Label>
        <Form.Select name="grupo">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Check
        name="status"
        type="switch"
        id="custom-switch"
        label="Cliente ativo"
      />
      <Button
        type="submit"
        variant="success"
        size="lg"
        onClick={ (e) => handleSubmit(e) }
      >
        Cadastrar
      </Button>
      </Form.Group>
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

export default Home