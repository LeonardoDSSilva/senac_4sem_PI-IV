CREATE TABLE usuarios(
	id bigint NOT NULL AUTO_INCREMENT,
	cpf varchar(11) NOT NULL UNIQUE,
	nome varchar(100) NOT NULL,
	email varchar(100) NOT NULL UNIQUE,
	senha varchar(100) NOT NULL,
	ativo boolean NOT NULL,
	tipo varchar(100) NOT NULL,

	PRIMARY KEY (id)
);
