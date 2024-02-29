using API_Pidelas.Controllers.Models;
using API_Pidelas.Data;
using API_Pidelas.Enums;
using API_Pidelas.ViewModels;
using Microsoft.AspNetCore.Mvc;
using SecureIdentity.Password;

namespace API_Pidelas.Controllers;

[ApiController]
public class UsuarioControllers : ControllerBase
{
	[HttpPost("v1/cadastrarUsuario")]

	public async Task<IActionResult> PostAsync(
		[FromBody] RegistrarUsuarioViewModel model,
		[FromServices] API_PidelasDataContext context)
	{
		var usuario = new Usuario
		{
			Nome = model.Nome,
			Cpf = model.Cpf,
			Email = model.Email,
			Ativo = true,
			TipoUsuario = (TipoUsuarioEnum)model.TipoUsuario
		};
		var senha = PasswordGenerator.Generate(25, true, false);
		usuario.SenhaHash = PasswordHasher.Hash(senha);

		try
		{
			context.Usuarios.Add(usuario);
			await context.SaveChangesAsync();
			return Ok(new { senha = senha });
		}
		catch (Exception)
		{
			// Retorne qual o erro q aconteceu
			return BadRequest(new { message = "Não foi possível cadastrar o usuário" });


		}
	}
}