import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Carros } from '../objetos/Carros';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private readonly API = `${environment.API}carros`

  constructor(private $http: HttpClient) {

  }
  
  listar() {
    return this.$http.get<Carros[]>(`${this.API}`)

  }
  
  buscarCarrosPorID(id: any){
    return this.$http.get<Carros>(`${this.API}/${id}`)
  }

  cadastrarCarro(carro: Carros){
    return this.$http.post(`${this.API}` , carro)
  }


  editarCarro(carro: Carros){
    return this.$http.put(`${this.API}/${carro.id}`, carro)
  }

  excluirCarro(id: any){
    return this.$http.delete(`${this.API}/${id}`)
  }

}
