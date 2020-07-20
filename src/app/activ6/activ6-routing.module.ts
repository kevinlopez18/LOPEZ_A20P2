import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activ6Page } from './activ6.page';

const routes: Routes = [
  {
    path: '',
    component: Activ6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activ6PageRoutingModule {}
