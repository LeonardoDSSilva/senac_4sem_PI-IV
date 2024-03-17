export interface Produto {
	id: number;
	nome: string;
	descricao: string;
	preco: number;
	imagemUrl: string;
	categoria: string;
	disponivel: boolean;
	quantidade: number;
	ativo: boolean;
}
