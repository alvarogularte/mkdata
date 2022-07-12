package com.mkdata.backend.MKData.repository;

import com.mkdata.backend.MKData.model.PessoaJuridica;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridica, Integer> {
  boolean existsByCnpj(String cnpj);
}
