import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCarrosComponent } from './cadastrar-carros/cadastrar-carros.component';
import { CarrosComponent } from './carros.component';
import { EditarCarrosComponent } from './editar-carros/editar-carros.component';

const routes: Routes = [
   {path: '', component: CarrosComponent},
   {path: 'cadastrar', component: CadastrarCarrosComponent},
   {path: ':id', component: EditarCarrosComponent},
];

   

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
