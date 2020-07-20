import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activ1Page } from './activ1.page';

const routes: Routes = [
  {
    path: '',
    component: Activ1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activ1PageRoutingModule {}
