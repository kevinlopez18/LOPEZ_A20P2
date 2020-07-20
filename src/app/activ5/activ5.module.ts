import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activ5PageRoutingModule } from './activ5-routing.module';

import { Activ5Page } from './activ5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Activ5PageRoutingModule
  ],
  declarations: [Activ5Page]
})
export class Activ5PageModule {}
