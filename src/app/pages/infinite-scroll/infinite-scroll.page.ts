import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data = Array(20);

  //Creamos un objeto de un elemnto d el html, en este caso del InfiniteScroll
  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;


  constructor() { }

  ngOnInit() {
  }


/**En caso de querer RECIBIR el método con el EVENTO
 * 
 * loadData(event){
 *    console.log(event);
*/

  loadData(){

    //Desactivando el INFINITE Scroll Al LLEGAR A 50 resultados mostrados
    if (this.data.length > 50  ){
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    //Esperando 1,5 segundos, antes de cargar 20 nuevos registros
    setTimeout(() => {
      //Añadiendo 20 posiciones más a la lista
      const nuevoArr= Array(20);
      this.data.push(...nuevoArr);
      this.infiniteScroll.complete();
    }, 1500);

  }


}



