import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Usuarios } from './objetos/Usuarios';
import { UsuariosService } from './service/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  // usuarios: passando um Array de <Usuarios> [].
  usuarios: Array<Usuarios> = []
  aniversariantes: Array<Usuarios> = [];

  constructor( private usuariosService: UsuariosService , private router: Router) { }

  ngOnInit(): void {
    
    this.usuariosService.listar().subscribe(usuariosBanco => {
      this.usuarios = usuariosBanco
      console.log(usuariosBanco)

    })
  }
    // trocando o id para idUsuario para o backend.
  editarUsuario =  (idUsuario: any) => {
      this.router.navigate(['usuarios',idUsuario])

  }

  excluirUsuario = (id: any) => {
    this.usuariosService.excluir(id).subscribe(
      success => this.ngOnInit(),
      error => console.log("Usuário não foi excluído"),
      () => console.log()
    );
  }

  aniversariantesDoMes = () => {
    this.usuariosService.aniversariantesMes().subscribe(response => {
      this.aniversariantes = response;
    });
  }
}


