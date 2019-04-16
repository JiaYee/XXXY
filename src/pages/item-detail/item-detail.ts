import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
} from 'ionic-angular';

import { Items } from '../../providers';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  item: any;

  constructor(
    public common: CommonProvider,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public items: Items)
    {
      this.item = navParams.get('item') || items.defaultItem;
    }

  sharePrinter()
  {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享打印机到',
      buttons: [
        {
          text: 'QQ',
          icon: 'chatbubbles',
          handler: () => {
            this.common.showToast("成功分享到QQ!");
          }
        },
        {
          text: '微信',
          icon: 'chatboxes',
          handler: () => {
            this.common.showToast("成功分享到微信！");
          }
        },
      ]
    });

    actionSheet.present();
  }

  shutdown()
  {
    this.item.status = "offline";
    this.navCtrl.pop();
    this.common.showToast("打印机已关闭");
  }

  reboot()
  {
    this.navCtrl.pop();
    this.common.showToast("打印机已重启");
  }

  clean()
  {
    this.common.showToast("墨头清理完成");
  }

  goMaintenance()
  {
    let item = this.item;
    this.navCtrl.push('MileagePage', { item });
  }
}
