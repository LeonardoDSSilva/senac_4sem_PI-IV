package br.senac.tads.api.domain.usuario;

public record ListaUsuario(Long id, String nome, String cpf, String email, TipoUsuario tipo, Boolean ativo) {

}
