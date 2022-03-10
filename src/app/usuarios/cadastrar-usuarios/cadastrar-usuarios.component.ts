import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../objetos/Usuarios';
import { UsuariosService } from 'src/app/usuarios/service/usuarios.service';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {

  usuario: Usuarios = new Usuarios();

  constructor(

    private router: Router,
    private usuariosService: UsuariosService,

  ) { }

  ngOnInit(): void {
  }

  // na components.ts geralmente fica a regra de negocio.

  adicionar = () => {
    this.usuariosService.adicionar(this.usuario).subscribe(
      sucess => this.navegar('usuarios'),
      erro => console.log('Deu ruim'),
      () => console.log('Requisição completa'))
      
  }

  navegar = (rota: any) => {
    this.router.navigate([rota])
  }
}
