import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CommonProvider } from '../../providers/common/common';
/**
 * Generated class for the MileagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mileage',
  templateUrl: 'mileage.html',
})
export class MileagePage {

  item: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public common: CommonProvider,
  )
  {
    this.item = this.navParams.get('item');
    console.log(this.item);
  }

  ionViewDidLoad()
  {
  }

}
