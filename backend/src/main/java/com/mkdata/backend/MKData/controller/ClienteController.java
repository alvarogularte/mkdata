package com.mkdata.backend.MKData.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mkdata.backend.MKData.exception.ClienteJaExisteException;
import com.mkdata.backend.MKData.model.Cliente;
import com.mkdata.backend.MKData.model.PessoaFisica;
import com.mkdata.backend.MKData.model.PessoaJuridica;
import com.mkdata.backend.MKData.service.ClienteService;

@RestController
public class ClienteController {

  @Autowired
  ClienteService clienteService;
  
  @PostMapping("/clientespf")
  public ResponseEntity<PessoaFisica> criarClientePf(@RequestBody PessoaFisica pessoaFisica )
    throws ClienteJaExisteException {
    PessoaFisica clienteCriado = clienteService.criarClientePf(pessoaFisica);
    return ResponseEntity.status(HttpStatus.OK).body(clienteCriado);
  }
  
  @PostMapping("/clientespj")
  public ResponseEntity<PessoaJuridica> criarClientePj(@RequestBody PessoaJuridica pessoaJuridica )
    throws ClienteJaExisteException {
    PessoaJuridica clienteCriado = clienteService.criarClientePj(pessoaJuridica);
    return ResponseEntity.status(HttpStatus.OK).body(clienteCriado);
  }
  
  @GetMapping("/clientes")
  public ResponseEntity<List<Cliente>> listarClientes() {
    List<Cliente> clientes = clienteService.listarClientes();
    return ResponseEntity.ok(clientes);
  }
  
  @DeleteMapping("/clientes/{cliente_id}")
  public ResponseEntity<Cliente> deletarCliente(@PathVariable("cliente_id") Integer id) {
    clienteService.deletarCliente(id);
    return ResponseEntity.ok().build();
  }
}
