package com.mkdata.backend.MKData.exception;

public class ClienteJaExisteException extends RuntimeException {
  
  public ClienteJaExisteException(String mensagem) {
    super(mensagem);
  }
}
