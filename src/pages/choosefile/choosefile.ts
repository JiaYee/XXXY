import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-choosefile',
  templateUrl: 'choosefile.html'
})
export class ChoosefilePage {

  items;
  history = [{
    path: this.file.externalApplicationStorageDirectory,
    dir: ''
  }];

  constructor(
    public navCtrl: NavController,
    public file: File,
    public plt: Platform
  )
  {
  }

  ionViewDidLoad()
  {
    this.plt.ready().then(() => {
      let path = 'file:///storage/emulated/0/tencent/MicroMsg//';
      let dir = 'Download';
      // let path = this.file.externalApplicationStorageDirectory;
      // let dir = '';
      this.listDir(path, dir);
    })
    .catch((err) => {
      console.log("Platform not ready");
    })
  }

  viewDetail(item)
  {
    // console.log(this.objConsole(item));
    let path = this.file.externalRootDirectory;
    let file = item.fullPath.substring(1, item.fullPath.length);
    // console.log(path, file);
    this.file.readAsDataURL(path, file).then((res) => {
        console.log(this.objConsole(res));
      })
    .catch((err) => {
      console.log(this.objConsole(err));
    })
  }

  objConsole(obj)
  {
    let str = JSON.stringify(obj);
    str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
    return str;
  }

  listDir(path, dir)
  {
    this.items = [];
    this.file.listDir(path, dir).then((entries) => {
      this.items = entries;
    })
    .catch((err) => {
      console.log(err);
    })
  }

  goDown(item)
  {
    let target = {
      path: item.nativeURL.replace(item.name, ""),
      dir: item.name
    }
    console.log(target.path, target.dir);
    this.history.push(target);
    this.listDir(target.path, target.dir);
  }

  goUp()
  {
    let target = this.history.pop();
    this.listDir(target.path, target.dir);
  }
}
