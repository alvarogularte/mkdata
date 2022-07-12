package com.mkdata.backend.MKData.model;

import java.time.LocalDate;

import javax.persistence.Entity;

@Entity
public class PessoaFisica extends Cliente {

  private String cpf;

  private String rg;
  
  private LocalDate dataCadastro;

  public PessoaFisica() {}
  
  public PessoaFisica(int id, String nome, String tipo, String grupo, String status, String cpf, String rg, String dataCadastro) {
    super(id, nome, tipo, grupo, status);
    this.cpf = cpf;
    this.rg = rg;
    this.dataCadastro = LocalDate.now();
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public String getRg() {
    return rg;
  }

  public void setRg(String rg) {
    this.rg = rg;
  }

  public LocalDate getDataCadastro() {
    return dataCadastro;
  }

  public void setDataCadastro(LocalDate dataCadastro) {
    this.dataCadastro = dataCadastro;
  }
}
