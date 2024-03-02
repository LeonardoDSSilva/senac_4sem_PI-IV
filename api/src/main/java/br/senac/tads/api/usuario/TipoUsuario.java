package br.senac.tads.api.usuario;

public enum TipoUsuario {

	ADMINISTRADOR("Administrador"),
	CLIENTE("Cliente"),
	ESTOQUISTA("Estoquista");

	private String tipo;

	TipoUsuario(String tipo) {
		this.tipo = tipo;
	}

	public String getTipo() {
		return tipo;
	}

}
