import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosefilePage } from './choosefile';

@NgModule({
  declarations: [
    ChoosefilePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosefilePage),
  ],
})
export class ChoosefilePageModule {}
