import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activ4PageRoutingModule } from './activ4-routing.module';

import { Activ4Page } from './activ4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Activ4PageRoutingModule
  ],
  declarations: [Activ4Page]
})
export class Activ4PageModule {}
