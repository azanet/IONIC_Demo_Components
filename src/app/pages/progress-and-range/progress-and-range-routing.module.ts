import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressAndRangePage } from './progress-and-range.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressAndRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressAndRangePageRoutingModule {}
