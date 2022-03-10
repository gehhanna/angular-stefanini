import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carros } from '../objetos/Carros';
import { CarrosService } from '../service/carros.service';

@Component({
  selector: 'app-editar-carros',
  templateUrl: './editar-carros.component.html',
  styleUrls: ['./editar-carros.component.css']
})
export class EditarCarrosComponent implements OnInit {

  id: any
  carros: Carros = new Carros()


  constructor(
    private carrosService: CarrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
        this.carrosService.buscarCarrosPorID(this.id).subscribe(carros => {
          this.carros = carros;

        })
      }
    })
  }
  
  editarCarro = () => {
    this.carrosService.editarCarro(this.carros).subscribe(
      sucees => this.navegar('carros'),
      erro => console.log('deu ruim editar carros'),
        () => console.log('requisição completa'))
        console.log("editou")
  }

  navegar = (rota: any) => {
    this.router.navigate([rota])
  }
}
