import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { BmobProvider } from '../../providers/bmob/bmob';

// import { FileChooser } from '@ionic-native/file-chooser';
// import { Chooser } from '@ionic-native/chooser';

/**
 * Generated class for the PrintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 // declare let filechooser: any;

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

  item: any;

  constructor(
    // private chooser: Chooser,
    // private fileChooser: FileChooser,
    public navCtrl: NavController,
    public navParams: NavParams,
    public common: CommonProvider,
    public bmob: BmobProvider,
  )
  {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad PrintPage');
  }

  uploadDoc()
  {
    this.navCtrl.push('ChoosefilePage');
  }

  submitOrder()
  {
    let tablename = "local";
    let prop = "name";
    let value = Date.now().toString();
    this.bmob.createData(tablename, prop, value).then((res) => {
      this.navCtrl.pop();
      this.common.showToast("成功支付提交订单！");
    })
    .catch((err) => {
      console.log(err);
    })
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
    if(this.copies > 1)
    {
      this.copies = this.copies-1;
    }
  }



}
