import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getClientes = async () => axios.get(`${BASE_URL}/clientes`);

export const postClientePf = async () => axios.post(`${BASE_URL}/clientespf`);

export const postClientePj = async () => axios.post(`${BASE_URL}/clientespj`);

export const deleteCliente = async () => axios.delete(`${BASE_URL}/clientes/:id`)