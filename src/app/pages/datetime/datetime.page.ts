import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNac: Date = new Date();

//las variables precedidas por 'custom', son utilizadas para crear 'ion-datetime' personalizado
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

  //  customPickerOptions: any; //Para no mostrar nigun botón en modo personalizado

  //Para mostrar botones y vincularle 'Acciones'
  customPickerOptions = {
    buttons: [
    {
      text: 'Hola',
      handler: (event) => {
        console.log(event)
      }
    }, 
    {
      text: 'Log',
      handler: () => {
        console.log('Pulśo LOG');
        return false;
      }
    }
    ]

  }


  constructor() { }


  ngOnInit() {}

  //Evento para capturar nueva fecha y obtener el 'Date' de la misma
  cambioFecha( event ){
    console.log( event.detail.value );
    console.log( new Date(event.detail.value) );
  }


}
