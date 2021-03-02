import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefiltro'
})
export class PipefiltroPipe implements PipeTransform {

  transform(value: any,arg: any[]): any {
    const resultadoFiltro = [];
    for(const filtro of value){
      if(filtro.nombre.indexof(arg)> -1){
        resultadoFiltro.push(filtro);
      }
    }
    return resultadoFiltro;
  }

}
