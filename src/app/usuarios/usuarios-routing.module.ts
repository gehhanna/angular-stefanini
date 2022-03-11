import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [

  {path: 'cadastrar', component: CadastrarUsuariosComponent},
  {path: ':id', component: EditarUsuariosComponent},
  {path: '', component: UsuariosComponent},
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
