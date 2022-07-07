package com.mkdata.backend.MKData.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mkdata.backend.MKData.model.Cliente;
import com.mkdata.backend.MKData.service.ClienteService;

@RestController
public class ClienteController {

  @Autowired
  ClienteService clienteService;
  
  @PostMapping("/clientes")
  public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente) {
    Cliente clienteCriado = clienteService.criarCliente(cliente);
    return ResponseEntity.ok(clienteCriado);
  }
}
