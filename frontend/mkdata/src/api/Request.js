import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getClientes = async () => axios.get(`${BASE_URL}/clientes`);

export const postClientePf = async (
  nome,
  tipo,
  documento1,
  documento2,
  grupo,
  status,
) => axios.post(`${BASE_URL}/clientespf`, {
  nome,
  tipo,
  documento1,
  documento2,
  grupo,
  status,
});

export const postClientePj = async (
  nome,
  tipo,
  documento1,
  documento2,
  grupo,
  status,
) => axios.post(`${BASE_URL}/clientespj`, {
  nome,
  tipo,
  documento1,
  documento2,
  grupo,
  status,
});

export const deleteCliente = async (id) => axios.delete(`${BASE_URL}/clientes/${id}`)