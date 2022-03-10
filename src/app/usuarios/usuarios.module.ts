import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuariosComponent,
    CadastrarUsuariosComponent,
    EditarUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    // importar FormsMOdule.
    FormsModule
  ]
})
export class UsuariosModule { }
