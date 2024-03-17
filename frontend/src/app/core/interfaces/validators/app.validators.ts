import {
	AbstractControl,
	ValidationErrors,
	ValidatorFn,
} from '@angular/forms';

export class AppValidators {
	static cpf(): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const cpf = control.value;
			if (cpf === null || cpf === undefined || cpf === '') {
				return null;
			}
			if (cpf.length !== 11) {
				return { cpf: 'CPF deve ter 11 dígitos' };
			}
			if (/(\d)\1{10}/.test(cpf)) {
				return { cpf: 'CPF inválido' };
			}
			let soma = 0;
			let resto;
			for (let i = 1; i <= 9; i++) {
				soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
			}
			resto = (soma * 10) % 11;
			if (resto === 10 || resto === 11) {
				resto = 0;
			}
			if (resto !== parseInt(cpf.substring(9, 10))) {
				return { cpf: 'CPF inválido' };
			}
			soma = 0;
			for (let i = 1; i <= 10; i++) {
				soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
			}
			resto = (soma * 10) % 11;
			if (resto === 10 || resto === 11) {
				resto = 0;
			}
			if (resto !== parseInt(cpf.substring(10, 11))) {
				return { cpf: 'CPF inválido' };
			}
			return null;
		};
	}
	static password(): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const password = control.value;
			if (password === null || password === undefined || password === '') {
				return null;
			}
			if (password.length < 6) {
				return { password: 'Senha deve ter no mínimo 6 caracteres' };
			}
			if (password.length > 20) {
				return { password: 'Senha deve ter no máximo 20 caracteres' };
			}
			if (!/^[a-zA-Z0-9]*$/.test(password)) {
				return { password: 'Senha deve ter apenas letras e números' };
			}
			return null;
		}
	}
	static confirmarSenha(password: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const confirmPassword = control.value;
			if (confirmPassword === null || confirmPassword === undefined || confirmPassword === '') {
				return null;
			}
			if (confirmPassword !== password) {
				return { confirmPassword: 'Senhas não conferem' };
			}
			return null;
		}
	}
}