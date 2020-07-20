import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activ2PageRoutingModule } from './activ2-routing.module';

import { Activ2Page } from './activ2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Activ2PageRoutingModule
  ],
  declarations: [Activ2Page]
})
export class Activ2PageModule {}
