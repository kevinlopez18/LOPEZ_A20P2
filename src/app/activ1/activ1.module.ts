import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activ1PageRoutingModule } from './activ1-routing.module';

import { Activ1Page } from './activ1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Activ1PageRoutingModule
  ],
  declarations: [Activ1Page]
})
export class Activ1PageModule {}
