package com.mkdata.backend.MKData.controller;

import static org.hamcrest.CoreMatchers.containsString;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import com.mkdata.backend.MKData.service.ClienteService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class ClienteControllerTest {

  @Autowired
  private MockMvc mockMvc;
  
  @MockBean
  private ClienteService clienteService;
  
  @Test
  void retornaListaVaziaQuandoNaoHouverClientes() throws Exception {
    doReturn(List.of()).when(clienteService).listarClientes();

    final var resposta = mockMvc.perform(get("/clientes"));
    
    resposta
      .andExpect(content().contentType(MediaType.APPLICATION_JSON))
      .andExpect(status().isOk())
      .andExpect(content().string(containsString("[]")));
  }
}
