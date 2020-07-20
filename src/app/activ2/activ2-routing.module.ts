import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activ2Page } from './activ2.page';

const routes: Routes = [
  {
    path: '',
    component: Activ2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activ2PageRoutingModule {}
