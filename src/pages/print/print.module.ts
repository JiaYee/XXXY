import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintPage } from './print';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PrintPage,
  ],
  imports: [
    IonicPageModule.forChild(PrintPage),
    TranslateModule.forChild()
  ],
})
export class PrintPageModule {}
