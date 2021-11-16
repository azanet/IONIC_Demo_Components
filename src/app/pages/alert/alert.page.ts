import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

//Alert SIMPLE
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      
      backdropDismiss: false,
      
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Esto es un Alert Simple, que obliga a PULSAR el BOTÓN',
      buttons: ['OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


//Alert MULTIBOTON
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({

      backdropDismiss: false,

      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Alert multibotón.',
      buttons: [{
        text: 'Ok!',
        handler: () =>{
          console.log('Yiii pulsaron "Ok!"')
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'rojo'
      }]
    
    });

    await alert.present();
  }


//Present ALERT PROMPT

async presentAlertPrompt() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'nombreUnicoDelCampo1',
        type: 'text',
        placeholder: 'Placeholder 1'
      },
      {
        name: 'nombreUnicoDelCampo2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2'
      },
      // multiline input.
      {
        name: 'nombreUnicoDelCampo3',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Placeholder 3'
      },
      {
        name: 'name3',
        value: 'http://ionicframework.com',
        type: 'url',
        placeholder: 'Favorite site ever'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2000-03-01',
        max: '2050-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name7',
        type: 'number'
      },
      {
        name: 'name8',
        type: 'password',
        placeholder: 'Advanced Attributes',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 4,
          inputmode: 'decimal'
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'rojo',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data:any) => {
          console.log('Confirm Ok');
          console.log('Mostrando los DATOS:');
          console.log(data);
        }
      }
    ]
  });

  await alert.present();
}



//Present ALERT RADIO-Buttons
async presentAlertRadio() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Radio',
    inputs: [
      {
        name: 'radio1',
        type: 'radio',
        label: 'Radio 1',
        value: 'value1',
        handler: () => {
          console.log('Radio 1 selected');
        },
        checked: true
      },
      {
        name: 'radio2',
        type: 'radio',
        label: 'Radio 2',
        value: 'value2',
        handler: () => {
          console.log('Radio 2 selected');
        }
      },
      {
        name: 'radio3',
        type: 'radio',
        label: 'Radio 3',
        value: 'value3',
        handler: () => {
          console.log('Radio 3 selected');
        }
      },
      {
        name: 'radio4',
        type: 'radio',
        label: 'Radio 4',
        value: 'value4',
        handler: () => {
          console.log('Radio 4 selected');
        }
      },
      {
        name: 'radio5',
        type: 'radio',
        label: 'Radio 5',
        value: 'value5',
        handler: () => {
          console.log('Radio 5 selected');
        }
      },
      {
        name: 'radio6',
        type: 'radio',
        label: 'Radio 6',
        value: 'value6',
        handler: () => {
          console.log('Radio 6 selected');
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'rojo',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data: any) => {
          console.log('Confirm Ok');
          console.log('Mostrando los DATOS:');
          console.log(data);
        }
      }
    ]
  });

  await alert.present();
}


//PRESENT ALERT CHACKBOX
async presentAlertCheckbox() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Checkbox',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'value1',
        handler: () => {
          console.log('Checkbox 1 selected');
        },
        checked: true
      },

      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'value2',
        handler: () => {
          console.log('Checkbox 2 selected');
        }
      },

      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'Checkbox 3',
        value: 'value3',
        handler: () => {
          console.log('Checkbox 3 selected');
        }
      },

      {
        name: 'checkbox4',
        type: 'checkbox',
        label: 'Checkbox 4',
        value: 'value4',
        handler: () => {
          console.log('Checkbox 4 selected');
        }
      },

      {
        name: 'checkbox5',
        type: 'checkbox',
        label: 'Checkbox 5',
        value: 'value5',
        handler: () => {
          console.log('Checkbox 5 selected');
        }
      },

      {
        name: 'checkbox6',
        type: 'checkbox',
        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
        value: 'value6',
        handler: () => {
          console.log('Checkbox 6 selected');
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'rojo',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data) => {
          console.log('Confirm Ok');
          console.log('Mostrando los DATOS:');
          console.log(data);

        }
      }
    ]
  });

  await alert.present();
}






}
