import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = [ 'Aquaman','Superman','Batman','Mujer Maravilla','Coche Fantastico','Caperucita Roja','Jaimito' ];

  //Creando PROPIEDAD Booleana para el TOGGLE (activas o desactivar ordenar la lista)
  reorder: boolean = true;


  constructor() { }

  ngOnInit() {
  }

doReorder( event: any ) {

  console.log( event);

  //cortando 1 elemento, (el elemento 'seleccionado') del array
  const itemMover = this.personajes.splice( event.detail.from, 1 )[0];
  //INSERTANDO el elemento cortado 'seleccionado' del array
  this.personajes.splice( event.detail.to, 0 , itemMover);

  event.detail.complete();
}

}
