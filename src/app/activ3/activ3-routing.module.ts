import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activ3Page } from './activ3.page';

const routes: Routes = [
  {
    path: '',
    component: Activ3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activ3PageRoutingModule {}
