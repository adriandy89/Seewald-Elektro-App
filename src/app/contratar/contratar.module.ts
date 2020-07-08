import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratarPageRoutingModule } from './contratar-routing.module';

import { ContratarPage } from './contratar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContratarPageRoutingModule
  ],
  declarations: [ContratarPage]
})
export class ContratarPageModule {}
