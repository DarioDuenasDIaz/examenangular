import { Injectable } from '@angular/core';
import { Ciclos } from '../utils/Ciclos';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  elementos: any[] = [
    {nombre:"DAM",conocimientos:["Sistemas infromaticos","Programación","Base de datos","Lenguaje de marcas","Entornos de desarrollo",
    "Empresa e iniciativa emprendedora","Inglés","Programacion multimedia y dispositivos moviles","Desarrllo de interfaces","Acceso a datos","Programacion de servicios y procesos","Sistemas de gestión empresarial"]},
    {nombre:"DAW",conocimientos:["Sistemas infromaticos","Programación","Base de datos","Lenguaje de marcas","Entornos de desarrollo","Empresa e iniciativa emprendedora",
      "Inglés","Desarrollo aplicaciones web entorno cliente","Desarrollo aplicaciones web entorno servidor","Depliegue de aplicaciones","Desarrollo de interfaces Web"]},
  ]
  ciclos: Ciclos[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
  ]

  constructor() { }
  getCiclos(){
    return this.ciclos;
  }

  getElementos(){
    return this.elementos;
  }
}
