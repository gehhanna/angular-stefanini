import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

 // aqui tem um array de rotas.
 // criar o bigodinho {} e colocar dentro as rotas.
 // o banana na caixa [{}]
 const routes: Routes = [

   {path: 'home' , component: HomeComponent},
   {path: 'usuarios', loadChildren:() => import ('./usuarios/usuarios.module').then(u => u.UsuariosModule)},
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
