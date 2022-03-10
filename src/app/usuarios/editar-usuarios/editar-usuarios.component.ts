import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../objetos/Usuarios';
import { UsuariosService } from 'src/app/usuarios/service/usuarios.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  id: any
  usuarios: Usuarios = new Usuarios()

  constructor(

    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
        console.log(this.id);

        this.usuariosService.buscarUsuarioID(this.id).subscribe(usuario => {
          this.usuarios = usuario;
          console.log(usuario)
        })
      }
    })
  }

  editarUsuario = () => {
    this.usuariosService.editarUsuario(this.usuarios).subscribe(
      sucees => this.navegar('usuarios'),
      erro => console.log('Deu ruim'),
      () => console.log('Requisição completa'))
    this.router.navigate(['usuarios'])

  }

  navegar = (rota: any) => {
    this.router.navigate([rota])

  }
}
