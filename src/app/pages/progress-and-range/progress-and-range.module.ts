import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressAndRangePageRoutingModule } from './progress-and-range-routing.module';

import { ProgressAndRangePage } from './progress-and-range.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressAndRangePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgressAndRangePage]
})
export class ProgressAndRangePageModule {}
