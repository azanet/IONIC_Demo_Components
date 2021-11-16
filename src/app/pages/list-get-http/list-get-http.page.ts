import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-get-http',
  templateUrl: './list-get-http.page.html',
  styleUrls: ['./list-get-http.page.scss'],
})
export class ListGetHttpPage implements OnInit {

  usuarios: Observable<any>;
  
 @ViewChild(IonList) ionList: IonList;

  constructor(private dataService: DataService) { }



  ngOnInit() {
    //this.dataService.getUsuarios().subscribe( console.log);
    this.usuarios = this.dataService.getUsuarios();
  }


  favorite(user:any){
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user:any){
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  delete(user:any){
    console.log('delete', user);
    this.ionList.closeSlidingItems();
  }

  git(user:any){
    console.log('git', user);
    this.ionList.closeSlidingItems();
  }
}
