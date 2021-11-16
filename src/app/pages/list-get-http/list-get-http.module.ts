import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGetHttpPageRoutingModule } from './list-get-http-routing.module';

import { ListGetHttpPage } from './list-get-http.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGetHttpPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListGetHttpPage]
})
export class ListGetHttpPageModule {}
