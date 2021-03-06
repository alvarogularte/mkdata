package com.mkdata.backend.MKData.repository;

import com.mkdata.backend.MKData.model.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
