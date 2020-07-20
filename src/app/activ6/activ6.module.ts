import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activ6PageRoutingModule } from './activ6-routing.module';

import { Activ6Page } from './activ6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Activ6PageRoutingModule
  ],
  declarations: [Activ6Page]
})
export class Activ6PageModule {}
