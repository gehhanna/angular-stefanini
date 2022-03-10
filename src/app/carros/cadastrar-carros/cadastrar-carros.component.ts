import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carros } from '../objetos/Carros';
import { CarrosService } from '../service/carros.service';

@Component({
  selector: 'app-cadastrar-carros',
  templateUrl: './cadastrar-carros.component.html',
  styleUrls: ['./cadastrar-carros.component.css']
})
export class CadastrarCarrosComponent implements OnInit {

 // passar a variavel carro como novo Carros para poder usar no metodo cadastrar.
  carro: Carros = new Carros();

  constructor(

    private router: Router,
    private carrosService: CarrosService

  ) { }

  ngOnInit(): void {
  }

  cadastrarCarro = () => {
    // usando a service e passando o cadastrarCarro chamando o carro a variavel que criei la em cima.
    this.carrosService.cadastrarCarro(this.carro).subscribe(
      sucess => this.navegar('carros'),
      erro => console.log('Deu ruim'),
      () => console.log('Requisição completa'))
  }

  navegar =  (rota: any) => {
    this.router.navigate([rota])
  }

}
