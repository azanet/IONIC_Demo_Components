import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  //MOSTRANDO MODAAL!!
  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: { 
        nombre: 'David',
        apellidos: 'Freyre Muñoz'
       },
      cssClass: 'my-custom-class'
    });
    await modal.present();


    //const recibiendo = await modal.onWillDismiss();  //Se dispara nada MAS COMENZAR AL CARRAR EL MODAL

    //const recibiendo = await modal.onDidDismiss(); //Se dispara al finalizar de CERRAR EL MODAL

    //Desectructurando el JSON, para quedarnos con la "data"
    const {data} = await modal.onWillDismiss();
    console.log( data );


  }




}
