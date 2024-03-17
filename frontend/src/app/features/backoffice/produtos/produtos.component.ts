import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Produto } from '../../../core/domain/produto';


const ELEMENT_DATA: Produto[] = [
  {
    id: 1,
    nome: 'Produto 1',
    descricao: 'Descrição do Produto 1',
    preco: 100,
    imagemUrl: 'https://via.placeholder.com/150',
    categoria: 'Categoria 1',
    disponivel: true,
    quantidade: 10,
    ativo: true
  },
  {
    id: 2,
    nome: 'Produto 2',
    descricao: 'Descrição do Produto 2',
    preco: 200,
    imagemUrl: 'https://via.placeholder.com/150',
    categoria: 'Categoria 2',
    disponivel: false,
    quantidade: 20,
    ativo: true
  },
  {
    id: 3,
    nome: 'Produto 3',
    descricao: 'Descrição do Produto 3',
    preco: 300,
    imagemUrl: 'https://via.placeholder.com/150',
    categoria: 'Categoria 3',
    disponivel: true,
    quantidade: 30,
    ativo: false
  }
];

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  dtProdutos = ELEMENT_DATA;

  colunas: string[] = ['id', 'nome',  'acoes'];

  constructor() { }

  ngOnInit() {
  }

  editarProduto(id: number) {
    console.log('Editar produto', id);
  }

  visualizarProduto(id: number) {
    console.log('Visualizar produto', id);
  }

}
