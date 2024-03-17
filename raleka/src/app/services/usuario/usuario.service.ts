import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private readonly API = 'https://senac-4sem-pi-iv.onrender.com/api/v1/usuario';

  constructor(private http: HttpClient) { }

  public login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API}/login`, usuario);
  }

  public logout(): Observable<any> {
    return this.http.get<any>(`${this.API}/logout`);
  }

  public listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API);
  }

  public buscarUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API}/${id}`);
  }

  public cadastrarUsuario(usuario: Usuario): Observable<String> {
    return this.http.post<String>(this.API, usuario);
  }

  public atualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API}/${usuario.id}`, usuario);
  }


}
