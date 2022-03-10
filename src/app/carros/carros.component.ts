import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carros } from './objetos/Carros';
import { CarrosService } from './service/carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carro = {} as Carros;
  carros: Array<Carros> = []

  constructor(private carrosService: CarrosService, private router: Router) { }

  ngOnInit(): void {

    this.carrosService.listar().subscribe(carrosBanco => {
      this.carros = carrosBanco
      console.log(carrosBanco);

    })

  }

  editarCarro = (id: any) => {
    this.router.navigate(['carros', id])

  }

  excluirCarro = (id: any) => {
    this.carrosService.excluirCarro(id).subscribe(
    success => this.ngOnInit(),
    error => console.log("Usuário não foi excluído"),
    () => console.log()

    ); 
  }
      
}