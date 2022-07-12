package com.mkdata.backend.MKData.service;

import com.mkdata.backend.MKData.exception.ClienteJaExisteException;
import com.mkdata.backend.MKData.model.Cliente;
import com.mkdata.backend.MKData.model.PessoaFisica;
import com.mkdata.backend.MKData.model.PessoaJuridica;
import com.mkdata.backend.MKData.repository.ClienteRepository;
import com.mkdata.backend.MKData.repository.PessoaFisicaRepository;
import com.mkdata.backend.MKData.repository.PessoaJuridicaRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

  @Autowired
  private ClienteRepository clienteRepository;
  
  @Autowired
  private PessoaFisicaRepository pessoaFisicaRepository;
  
  @Autowired
  private PessoaJuridicaRepository pessoaJuridicaRepository;
  
 /**
  * method to create a new client.
  * @param cliente cliente
  * @return status code
  */
  
  public PessoaFisica criarClientePf(PessoaFisica pessoaFisica) {
    if (pessoaFisicaRepository.existsByCpf(pessoaFisica.getCpf())) {
      throw new ClienteJaExisteException("Cliente já cadastrado!");
    }
    return clienteRepository.save(pessoaFisica);
  }
  
  public PessoaJuridica criarClientePj(PessoaJuridica pessoaJuridica) {
    if (pessoaJuridicaRepository.existsByCnpj(pessoaJuridica.getCnpj())) {
      throw new ClienteJaExisteException("Cliente já cadastrado!");
    }
    return clienteRepository.save(pessoaJuridica);
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
