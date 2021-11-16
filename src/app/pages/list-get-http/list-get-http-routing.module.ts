import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGetHttpPage } from './list-get-http.page';

const routes: Routes = [
  {
    path: '',
    component: ListGetHttpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGetHttpPageRoutingModule {}
