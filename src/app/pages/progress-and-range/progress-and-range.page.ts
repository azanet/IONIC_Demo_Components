import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-and-range',
  templateUrl: './progress-and-range.page.html',
  styleUrls: ['./progress-and-range.page.scss'],
})
export class ProgressAndRangePage implements OnInit {

  porcentaje: number = 0.07;

  constructor() { }

  ngOnInit() {}

  rangeChange( event ){

    console.log( event.detail.value);
    //Pasando el VALOR a "porcentaje", para representarlo en la 'ProgressBar'
    this.porcentaje = event.detail.value/100;
  }

}
