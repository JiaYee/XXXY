import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { BmobProvider } from '../../providers/bmob/bmob';
import QrScanner from 'qr-scanner';

/**
 * Generated class for the LocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local',
  templateUrl: 'local.html',
})
export class LocalPage {

  ticker: number = 0;
  tablename: any = "local";

  constructor(
    public bmob: BmobProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public common: CommonProvider,
  )
  {
  }

  ionViewDidLoad()
  {
    let subData = setInterval(() => { this.countData() }, 3000);
  }

  countData()
  {
    this.bmob.countData(this.tablename).then((res: any) => {
      if(this.ticker == 0)
      {
        //first time initialize
        this.ticker = res;
      }
      else if(res > this.ticker)
      {
        //means new data is in
        this.ticker = res;
        var msg = new SpeechSynthesisUtterance("正在打印您的文件");
        msg.lang = 'zh';
        window.speechSynthesis.speak(msg);
        setTimeout(() => { this.showDone() }, 5000);
      }
      else
      {
        //means no new data
        console.log("Same Data...");
      }
    })
  }

  showDone()
  {
    var msg = new SpeechSynthesisUtterance("您的文件已打印完成");
    msg.lang = 'zh';
    window.speechSynthesis.speak(msg);
    this.common.showAlert("您的文件已打印完成", "");
  }

  create()
  {
    let prop = "name";
    let value = Date.now().toString();
    this.bmob.createData(this.tablename, prop, value).then((res) => {
      this.common.showToast("Data Created");
    })
    .catch((err) => {
      this.common.showToast(err);
    })
  }

}
