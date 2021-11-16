import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit {


  buscar: string = '';
  columna: string = 'publisher';
  superHeroes: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroesDelay();
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
