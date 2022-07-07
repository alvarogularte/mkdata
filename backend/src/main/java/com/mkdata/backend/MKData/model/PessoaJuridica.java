package com.mkdata.backend.MKData.model;

import javax.persistence.Column;

public class PessoaJuridica extends Cliente {
  
  @Column
  private String cnpj;
  
  @Column
  private String ie;

  public PessoaJuridica(String cnpj, String ie) {
    super();
    this.cnpj = cnpj;
    this.ie = ie;
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
}
