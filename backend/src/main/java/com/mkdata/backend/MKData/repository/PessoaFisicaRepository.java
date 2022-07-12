package com.mkdata.backend.MKData.repository;

import com.mkdata.backend.MKData.model.PessoaFisica;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaFisicaRepository extends JpaRepository<PessoaFisica, Integer> {
  boolean existsByCpf(String cpf);
}
