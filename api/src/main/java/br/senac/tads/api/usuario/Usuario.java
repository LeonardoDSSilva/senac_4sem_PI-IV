package br.senac.tads.api.usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@EqualsAndHashCode(of = "id")

public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String email;
	private String senha;
	private Boolean ativo;
	private TipoUsuario tipo;

	public Usuario() {
	}

	public Usuario(Long id, String nome, String email, String senha, Boolean ativo, TipoUsuario tipo) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.ativo = ativo;
		this.tipo = tipo;
	}

	public Usuario(CadastroUsuario usuario) {
		this.nome = usuario.nome();
		this.email = usuario.email();
		this.senha = usuario.senha();
		this.ativo = usuario.ativo();
		this.tipo = usuario.tipo();
	}

	public String getNome() {
		return nome;
	}

	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}

	public TipoUsuario getTipo() {
		return tipo;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public void setTipo(TipoUsuario tipo) {
		this.tipo = tipo;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nome=" + nome + ", email=" + email + ", senha=" + senha + ", ativo=" + ativo
				+ ", tipo=" + tipo + "]";
	}
}
