import React from 'react';
import Form from 'react-bootstrap/Form';

function Home() {

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nome:</Form.Label>
        <Form.Control placeholder="Digite o nome do cliente" required />
        <Form.Label>Tipo de cliente:</Form.Label>
        <Form.Control placeholder="Digite o tipo do cliente" required />
        <Form.Label>Cpf:</Form.Label>
        <Form.Control placeholder="Digite o Cpf do cliente" required />
        <Form.Label>Cnpj:</Form.Label>
        <Form.Control placeholder="Digite o Cnpj do cliente" required />
        <Form.Label>Rg:</Form.Label>
        <Form.Control placeholder="Digite o RG do cliente" required />
        <Form.Label>Ie:</Form.Label>
        <Form.Control placeholder="Digite o ie do cliente" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Grupo do cliente:</Form.Label>
        <Form.Select >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Check 
            type="switch"
            id="custom-switch"
            label="Cliente ativo"
        />
      </Form.Group>
    </>
  )
}

export default Home