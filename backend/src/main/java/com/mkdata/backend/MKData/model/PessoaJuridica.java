package com.mkdata.backend.MKData.model;

import java.time.LocalDate;

import javax.persistence.Entity;

@Entity
public class PessoaJuridica extends Cliente {

  private String cnpj;

  private String ie;
  
  private LocalDate dataCadastro;

  public PessoaJuridica() {}

  public PessoaJuridica(int id, String nome, String tipo, String grupo, String status, String cnpj, String ie, String dataCadastro) {
    super(id, nome, tipo, grupo, status);
    this.cnpj = cnpj;
    this.ie = ie;
    this.dataCadastro = LocalDate.now();
  }

  public String getCnpj() {
    return cnpj;
  }

  public void setCnpj(String cnpj) {
    this.cnpj = cnpj;
  }

  public String getIe() {
    return ie;
  }

  public void setIe(String ie) {
    this.ie = ie;
  }

  public LocalDate getDataCadastro() {
    return dataCadastro;
  }

  public void setDataCadastro(LocalDate dataCadastro) {
    this.dataCadastro = dataCadastro;
  }
}
