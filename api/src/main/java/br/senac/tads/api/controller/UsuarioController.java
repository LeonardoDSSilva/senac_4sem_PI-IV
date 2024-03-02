package br.senac.tads.api.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.senac.tads.api.usuario.CadastroUsuario;
import br.senac.tads.api.usuario.LogarUsuario;
import br.senac.tads.api.usuario.Usuario;
import br.senac.tads.api.usuario.UsuarioRepository;
import lombok.val;

@RestController
@RequestMapping("/api/v1/usuario")

public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;
	private final PasswordEncoder encoder;

	public UsuarioController(UsuarioRepository repository, PasswordEncoder encoder) {
		this.repository = repository;
		this.encoder = encoder;
	}

	@PostMapping
	@Transactional
	public ResponseEntity<String> cadastrarUsuario(@RequestBody CadastroUsuario usuario) {

		usuario.setSenha(encoder.encode(usuario.getSenha()));

		// Verifica se o e-mail já está cadastrado
		Optional<Usuario> optUsuario = repository.findByEmail(usuario.getEmail());
		if (optUsuario.isPresent()) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("E-mail já cadastrado");
		}

		// Cadastra o usuário
		val novoUsuario = new Usuario(usuario);
		repository.save(novoUsuario);

		// Retorna o resultado
		return ResponseEntity.status(HttpStatus.CREATED).body("Usuário cadastrado com sucesso");

	}

	@GetMapping("/login")
	public ResponseEntity<Boolean> logarUsuario(@RequestBody LogarUsuario usuario) {

		// Consulta o usuário no banco de dados e retorna um Usuario ou um Optional
		// vazio
		Optional<Usuario> optUsuario = repository.findByEmail(usuario.email());

		// Verifica se o usuário existe
		if (optUsuario.isEmpty()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
		}

		// Verifica se a senha está correta
		boolean valido = encoder.matches(usuario.senha(), optUsuario.get().getSenha());

		// Retorna o resultado
		HttpStatus status = valido ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
		return ResponseEntity.status(status).body(valido);

	}

}
