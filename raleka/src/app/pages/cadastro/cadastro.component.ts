import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../interfaces/usuario';
import { AppValidators } from '../../app.validators';

@Component({
	selector: 'app-cadastro',
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		RouterLink
	],
	templateUrl: './cadastro.component.html',
	styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

	cadastroForm!: FormGroup;
	senhasConferem = false;
	isConfirmPasswordDirty = false;
	confirmPasswordClass = 'cadastroForm';



	constructor(
		private formBuilder: FormBuilder,
		private usuarioService: UsuarioService,
		private router: Router
	) { }


	ngOnInit(): void {
		this.cadastroForm = this.formBuilder.group({
			nome: [null, Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(100),
				Validators.pattern('^[a-zA-Z ]*$')
			])],
			email: [null, Validators.compose([
				Validators.required,
				Validators.email
			])],
			cpf: [null, Validators.compose([
				Validators.required,
				Validators.pattern('^[0-9]{11}$'),
				Validators.minLength(11),
				Validators.maxLength(11),
				AppValidators.cpf()
			])],
			senha: [null, Validators.compose([
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(20),
				Validators.pattern('^[a-zA-Z0-9]*$'),
			])],
			confirmarSenha: [null, Validators.compose([
				Validators.required
			])],
			ativo: [true],
			tipo: [1]
		});
	}

	cadastrar(): void {
		if (this.cadastroForm.valid) {
			const usuario = this.cadastroForm.getRawValue();
			console.log(usuario);
			debugger;
			this.usuarioService.cadastrarUsuario(usuario).subscribe(
				() => {
					this.router.navigate(['/login']);
				},
				() => {
					alert('Erro ao cadastrar usuário');
				}
			);
		}
	}

	validarSenha(): boolean {
		const senha = this.cadastroForm.get('senha')?.value;
		const confirmarSenha = this.cadastroForm.get('confirmarSenha')?.value;
		return senha === confirmarSenha;
	}

	checarSenhas(cs: string, s: string): void {
		this.senhasConferem = cs === s;
		this.isConfirmPasswordDirty = true;
		this.senhasConferem ? this.confirmPasswordClass = 'cadastroForm' : this.confirmPasswordClass = 'cadastroForm invalid';
	}

}
