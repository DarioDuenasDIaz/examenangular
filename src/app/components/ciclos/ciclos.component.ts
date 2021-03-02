import { CiclosService } from './../../services/ciclos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ciclos } from 'src/app/utils/Ciclos';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {


  elementos: Ciclos[] = [];
  cartasCiclos:Ciclos[]=[];
  constructor(private gestorRutasActivas: ActivatedRoute, private servicioDatos: CiclosService) { }

  ngOnInit(): void {
    
    this.gestorRutasActivas.paramMap.subscribe(param=>{
   

      this.elementos = this.servicioDatos.getElementos();  
      this.cartasCiclos = this.servicioDatos.getCiclos();  
    })

  }

}
