import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activ3PageRoutingModule } from './activ3-routing.module';

import { Activ3Page } from './activ3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Activ3PageRoutingModule
  ],
  declarations: [Activ3Page]
})
export class Activ3PageModule {}
