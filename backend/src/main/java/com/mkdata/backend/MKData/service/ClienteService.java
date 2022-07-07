package com.mkdata.backend.MKData.service;

import com.mkdata.backend.MKData.model.Cliente;
import com.mkdata.backend.MKData.repository.ClienteRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

  @Autowired
  private ClienteRepository clienteRepository;
  
 /**
  * method to create a new client.
  * @param cliente cliente
  * @return status code
  */
  
  public Cliente criarCliente(Cliente cliente) {
    return clienteRepository.save(cliente);
  }
  
  /**
   * method to list all clients.
   * @return list of clients
   */
  
  public List<Cliente> listarClientes() {
    return clienteRepository.findAll();
  }

  public void deletarCliente(Integer id) {
    clienteRepository.deleteById(id);
  }
}
