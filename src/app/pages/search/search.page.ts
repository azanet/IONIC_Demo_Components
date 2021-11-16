import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  albumes: any[] = [];
  textoBuscar: string = '';


  constructor( private dataService: DataService) { }

  ngOnInit() {
    //Nos suscribimos al "SERVICIO" que hace la peticion HTTP para recoger los datos
    //Y Almacenamos lo que devuelva en nuestra variable "albumes", que mostraremos en el html
    this.dataService.getAlbumes().subscribe( albumes => {
      this.albumes = albumes;
    });
  }

  //Recibiendo el "TEXTO A BUSCAR"
  onSearchChange(event){
  //  console.log(event)
    this.textoBuscar = event.detail.value;

  }

}
