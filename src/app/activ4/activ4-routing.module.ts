import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activ4Page } from './activ4.page';

const routes: Routes = [
  {
    path: '',
    component: Activ4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activ4PageRoutingModule {}
