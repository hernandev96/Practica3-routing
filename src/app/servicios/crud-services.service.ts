import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudServicesService {

  private url="http://localhost:3000"
  constructor(private http:HttpClient) { }

  public agregarUsuario(usuario:Usuario):Observable<any>{
    var usuarioJSON=JSON.stringify(usuario);
    return this.http.post(this.url+'/usuario/add/user', usuarioJSON);
  }

  public obtenerUsuarios():Observable<any>{
    return this.http.get(this.url+'/usuarios');
  }

  public actualizarUsuario(usuario:Usuario):Observable<any>{
    var usuarioJSON=JSON.stringify(usuario);
    return this.http.put(this.url+'/usuario/update',usuarioJSON);
  }
  public eliminarUsuario(indice:number):Observable<any>{
    return this.http.delete(this.url+'/usuario/delete/'+indice);
  }
}
