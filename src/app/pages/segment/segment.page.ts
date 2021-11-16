import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  buscar: string = '';
  columna: string = 'publisher';
  superHeroes: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }


  segmentChanged(event){
    console.log(event.detail.value);

    if(event.detail.value === 'todos'){
      this.buscar= '';
    }else{
      this.buscar = event.detail.value;
    }

    

  }

}
