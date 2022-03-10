import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../objetos/Usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private readonly API = `${environment.API}usuarios`
  //$http para usar os metodos get,post,put,delete etc.
  constructor(private $http: HttpClient) {
    
   }
    listar(){
      console.log(`${this.API}`);
     return this.$http.get<Usuarios[]>(`${this.API}`)
   }

    adicionar(usuarios: Usuarios){
      return this.$http.post(this.API, usuarios)
    }

    buscarUsuarioID(id:any) {

      return this.$http.get<Usuarios>(`${this.API}/${id}`)
      
    }

    editarUsuario(usuario: Usuarios){
    return this.$http.put(`${this.API}/${usuario.id}`, usuario)

    }

    excluir(id: any) {
      return this.$http.delete(`${this.API}/${id}`);
    }
}
