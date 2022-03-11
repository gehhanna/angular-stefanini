import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../objetos/Usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  // puxar a rota da enviroment e encaminhar para usuarios.
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

    // alterando id para idUsuario para funcionar no backend.

    buscarUsuarioID(idUsuario:any) {

      return this.$http.get<Usuarios>(`${this.API}/${idUsuario}`)
      
    }


    editarUsuario(usuario: Usuarios){
    return this.$http.put(`${this.API}/${usuario.idUsuario}`, usuario)

    }
    // alterando id para idUsuario do backend.
    excluir(idUsuario: any) {
      return this.$http.delete(`${this.API}/${idUsuario}`);
    }

    aniversariantesMes() {
      return this.$http.get<Usuarios[]>(`${this.API}/aniversariantes`);
    }
}
