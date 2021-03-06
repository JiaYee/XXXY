import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MileagePage } from './mileage';
import { ProgressBarModule } from "angular-progress-bar"

@NgModule({
  declarations: [
    MileagePage,
  ],
  imports: [
    ProgressBarModule,
    IonicPageModule.forChild(MileagePage),
    TranslateModule.forChild()
  ],
})
export class MileagePageModule {}
