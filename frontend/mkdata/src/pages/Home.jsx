import React, { useEffect, useState } from 'react';
import { getClientes } from '../api/Request';
import { ListGroup, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [clientes, setClientes] = useState([]);
  const [clientesOk, setClientesOk] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setClientes(getClientes());
    if (clientes) {
      setClientesOk(true);
    } else {
      setClientesOk(false);
    }
  }, []);

  return (
    <div>
      <ListGroup as="ol" numbered>
        { clientesOk
          ? clientes.map((cliente) => (
            <ListGroup.Item as="li">{ cliente }</ListGroup.Item>
          ))
          : <Alert.Heading>Nenhum cliente foi encontrado.</Alert.Heading>
        }
      </ListGroup>
      <Button
        type="button"
        variant="success"
        size="lg"
        onClick={ navigate('/register') }
      >
        Cadastrar novo cliente
      </Button>
      <Button
        type="button"
        variant="success"
        size="lg"
        onClick={ navigate('/delete') }
      >
        Remover um cliente
      </Button>
    </div>
  )
}

export default Home