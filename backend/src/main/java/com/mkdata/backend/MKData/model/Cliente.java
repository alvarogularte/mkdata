package com.mkdata.backend.MKData.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String nome;
  private String tipo;
  private String grupo;
  private String status;
 
  public Cliente() {}
  
  public Cliente(int id, String nome, String tipo, String grupo, String status) {
    super();
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.grupo = grupo;
    this.status = status;
  }
 
  public String getNome() {
    return nome;
  }
  public void setNome(String nome) {
    this.nome = nome;
  }
  public String getTipo() {
    return tipo;
  }
  public void setTipo(String tipo) {
    this.tipo = tipo;
  }

  public String getGrupo() {
    return grupo;
  }
  public void setGrupo(String grupo) {
    this.grupo = grupo;
  }
  public String getStatus() {
    return status;
  }
  public void setStatus(String status) {
    this.status = status;
  }
}
