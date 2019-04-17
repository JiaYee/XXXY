import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
/**
 * Generated class for the PrintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-print',
  templateUrl: 'print.html',
})
export class PrintPage {

  papertype: any = "A4";
  copies: number = 1;
  bnw: any = "黑白";
  duplex: any = "单面";
  orientation: any = "纵向";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public common: CommonProvider,
  )
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad PrintPage');
  }

  uploadDoc()
  {
    this.common.showToast("成功上传文件！")
  }

  submitOrder()
  {
    this.navCtrl.pop();
    this.common.showToast("成功支付提交订单！");
  }

  checkPaperType(papertype)
  {
    if(this.papertype == papertype)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  setPaperType(papertype)
  {
    this.papertype = papertype;
  }

  checkBNW(bnw)
  {
    if(this.bnw == bnw)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  setBNW(bnw)
  {
    this.bnw = bnw;
  }

  checkDuplex(duplex)
  {
    if(this.duplex == duplex)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  setDuplex(duplex)
  {
    this.duplex = duplex;
  }

  checkOrientation(orientation)
  {
    if(this.orientation == orientation)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  setOrientation(orientation)
  {
    this.orientation = orientation;
  }

  addCopies()
  {
    this.copies = this.copies+1;
  }

  minusCopies()
  {
    this.copies = this.copies-1;
  }



}
