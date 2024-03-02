package br.senac.tads.api.domain.usuario;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	public Optional<Usuario> findByEmail(String email);

	@SuppressWarnings("null")
	public Optional<Usuario> findById(Long id);

}