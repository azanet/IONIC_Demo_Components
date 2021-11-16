import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[],
             texto: string= '',
             columna: string= 'title'

            ): any[] {

   // console.log(arreglo);
   // console.log(texto);

   //So ni hay nada que buscar, RETORNAMOS TODO EL ARREGLO
    if( texto === '' ) {
      return arreglo;
    }

    //Si el ARREGLO VIENE VACÍO, RETORNAMOS EL ARREGLO (null o lo que sea)
    if( !arreglo ){
      return arreglo;
    }


    //pasamos a lowarcase, para hacer match (ya que JS hace busquedas CASE-SENSITIVE)
    texto = texto.toLowerCase();

    //Retornando SOLO los 'ITEMS' que COINCIDAN con la PALABRA SUGERIDA POR EL USUARIO
    return arreglo.filter( 
      //Aquí el TITULO(con lo que lo comparamos) tambien lo pasamos a LOWERCASE
      item => item[columna].toLowerCase().includes( texto )
    );

  }

}
