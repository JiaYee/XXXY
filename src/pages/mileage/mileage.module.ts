import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MileagePage } from './mileage';

@NgModule({
  declarations: [
    MileagePage,
  ],
  imports: [
    IonicPageModule.forChild(MileagePage),
    TranslateModule.forChild()
  ],
})
export class MileagePageModule {}
