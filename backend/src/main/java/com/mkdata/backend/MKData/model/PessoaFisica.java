package com.mkdata.backend.MKData.model;

public class PessoaFisica extends Cliente {
  

  private String cpf;
  

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
