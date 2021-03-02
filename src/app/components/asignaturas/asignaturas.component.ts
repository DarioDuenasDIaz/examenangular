import { AsignaturasService } from './../../services/asignaturas.service';
import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/utils/Asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturasFiltrar: Asignatura[];
  

  constructor(private servicio: AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturasFiltrar = this.servicio.getAsignaturas()
  }
  buscarAsignatura(nombre:string){
    this.asignaturasFiltrar.forEach((Asignatura)=>{
      if(Asignatura.nombre.toLowerCase().includes(nombre.toLocaleLowerCase())){}
    });
  }

}
