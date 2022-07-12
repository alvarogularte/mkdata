package com.mkdata.backend.MKData.controller;

import com.mkdata.backend.MKData.exception.ClienteJaExisteException;
import com.mkdata.backend.MKData.exception.DataError;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GerenciadorExceptionController {

  @ExceptionHandler(ClienteJaExisteException.class)
  public ResponseEntity<DataError> handleConflict(RuntimeException e) {
    return ResponseEntity.status(HttpStatus.CONFLICT).body(new DataError(e.getMessage()));
  }
}
