import { Routes } from '@angular/router';
import { ProdutosComponent } from './features/backoffice/produtos/produtos.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'produtos',
		pathMatch: 'full',
	},
	{ path: 'produtos', component: ProdutosComponent }
	
];
