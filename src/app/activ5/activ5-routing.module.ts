import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activ5Page } from './activ5.page';

const routes: Routes = [
  {
    path: '',
    component: Activ5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activ5PageRoutingModule {}
