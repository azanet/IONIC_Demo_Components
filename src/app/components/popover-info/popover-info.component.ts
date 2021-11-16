import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  opciones = Array(40);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

//Retornando VALOR seleccionado
  onClick( valor:number){
    this.popoverCtrl.dismiss({
      item: valor
    });

  }
}
