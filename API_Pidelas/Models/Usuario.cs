using API_Pidelas.Enums;

namespace API_Pidelas.Controllers.Models;

public class Usuario
{
	public long Id { get; set; }
	public string Nome { get; set; }
	public string Cpf { get; set; }
	public string Email { get; set; }
	public string SenhaHash { get; set; }
	public bool Ativo { get; set; }
	public TipoUsuarioEnum TipoUsuario { get; set; }

}
