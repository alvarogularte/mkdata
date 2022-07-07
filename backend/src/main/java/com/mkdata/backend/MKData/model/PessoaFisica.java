package com.mkdata.backend.MKData.model;

import javax.persistence.Column;

public class PessoaFisica extends Cliente {
  
  @Column
  private String cpf;
  
  @Column
  private String rg;

  public PessoaFisica(String cpf, String rg) {
    super();
    this.cpf = cpf;
    this.rg = rg;
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
}
