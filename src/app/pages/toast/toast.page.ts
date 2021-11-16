import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }



  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Soy el TOAST que se ha lanzado.',
      duration: 2000
    });
    toast.present();
  }


  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message: 'Pulse para Cerrar',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favoritos',
          handler: () => {
            console.log('Favoritos clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
