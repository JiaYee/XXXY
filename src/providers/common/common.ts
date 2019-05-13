import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { IonicPage, App, NavController, NavParams, ActionSheetController, AlertController, ToastController, LoadingController, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class CommonProvider {

  spinnerLoading: boolean = false;
  loading: any;
  storageRef: any;

  user: any = {};

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public app: App,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public splashScreen: SplashScreen,
    public plt: Platform,
  )
  {
  }

  showAlert(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
    });
    alert.present();
  }

  consoleObj(res)
  {
    console.log(this.obj2String(res));
  }

  obj2String(obj)
  {
    let str = JSON.stringify(obj);
    str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
    return str;
  }


  // httpPost(url, param)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(url, param).subscribe((res: any) => {
  //       resolve(res);
  //     })
  //   })
  // }
  //
  // httpGet(url, options)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(url, options).subscribe((res: any) => {
  //       resolve(res);
  //     })
  //   })
  // }

  hideSplash()
  {
    this.splashScreen.hide();
  }

  WSNumber(number, text)
  {
    let param = "https://api.whatsapp.com/send?phone=6" + number + "&text=" + text;
    window.open(param);
  }

  isDevice()
  {
    if(this.plt.is('cordova'))
    {
      //supports cordova, real device
      return true;
    }
    else
    {
      //not supports cordova, web version
      return false;
    }
  }

  showToast(text)
  {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

  startLoading()
  {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  stopLoading()
  {
    this.loading.dismiss();
  }

  startSpinner()
  {
    this.spinnerLoading = true;
  }

  stopSpinner()
  {
    this.spinnerLoading = false;
  }

  checkSpinner()
  {
    return this.spinnerLoading;
  }

  //****************** Start of Authentication ******************

  // signIn(email, password)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // signOut()
  // {
  //   this.afAuth.auth.signOut();
  // }
  //
  // resetPassword(email)
  // {
  //   return this.afAuth.auth.sendPasswordResetEmail(email)
  //   .catch((err) => {
  //     this.showToast("Invalid Email");
  //   })
  // }
  //
  // signUp(email, password, type)
  // {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((newUser) => {
  //     let path = "/users";
  //     let key = newUser.uid;
  //     let content = {
  //       email: email,
  //       type: type,
  //       photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  //       id: key,
  //     }
  //     this.updateObject(path, key, content);
  //
  //     this.showToast("Register Successful");
  //   })
  //   .catch((err) => {
  //     this.showToast("Invalid Email / Duplicate Account");
  //   })
  // }
  //
  // getAuth()
  // {
  //   return new Promise((resolve, reject) => {
  //     this.afAuth.authState.subscribe((auth) => {
  //       if(auth)
  //       {
  //         resolve(auth.uid);
  //       }
  //       else
  //       {
  //         reject();
  //       }
  //     });
  //   })
  // }
  //
  // getUser()
  // {
  //   return new Promise((resolve, reject) => {
  //     this.getAuth().then((key) => {
  //       let path = "/users"
  //       this.readObject(path, key).then((user) => {
  //         resolve(user);
  //       })
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  // //****************** End of Authentication ******************
  //
  // //****************** Start of Realtime Database ******************
  //
  // createObject(path, key, content)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.db.object(path + '/' + key).set(content).then(() => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // readObject(path, key)
  // {
  //   return new Promise((resolve) => {
  //     this.db.object(path + '/' + key).snapshotChanges().map(action => ({ key: action.key, ...action.payload.val() }))
  //     .subscribe(object => {
  //       resolve(object);
  //     });
  //   })
  // }
  //
  // updateObject(path, key, content)
  // {
  //   return new Promise((resolve, reject) => {
  //     let target = this.db.object(path + '/' + key);
  //     target.update(content).then(() => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // deleteObject(path, key)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.db.object(path + '/' + key).remove().then(() => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // createList(path, content)
  // {
  //   return new Promise((resolve, reject) => {
  //     let target = this.db.list(path);
  //     target.push(content);
  //   })
  // }
  //
  // readList(path)
  // {
  //   return new Promise((resolve) => {
  //     this.db.list(path).snapshotChanges().map(actions => {
  //       return actions.map(action => ({ key: action.key, ...action.payload.val() }));
  //     }).subscribe(items => {
  //       resolve(items);
  //     });
  //   });
  // }
  //
  // updateList(path, key, content)
  // {
  //   return new Promise((resolve, reject) => {
  //     let target = this.db.list(path);
  //     target.update(key, content).then(() => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // deleteList(path, key)
  // {
  //   let target = this.db.list(path);
  //   target.remove(key);
  // }
  //
  // //****************** End of Realtime Database ******************
  //
  // //****************** Start of Angularfirestore ******************
  //
  // createID()
  // {
  //   return this.afs.createId();
  // }
  //
  // createDoc(path, id, content)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.afs.doc(path + '/' + id).set(content).then(() => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // readDoc(path, id)
  // {
  //   return new Promise((resolve) => {
  //     this.afs.doc(path + '/' + id).snapshotChanges().subscribe((doc) => {
  //       resolve(doc);
  //     });
  //   })
  // }
  //
  // updateDoc(path, id, content)
  // {
  //   return new Promise((resolve, reject) => {
  //     let target = this.afs.doc(path + '/' + id);
  //     target.update(content).then((res) => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // deleteDoc(path, id)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.afs.doc(path + '/' + id).delete().then((res) => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // createCollection(path, content)
  // {
  //   return new Promise((resolve, reject) => {
  //     let target = this.afs.collection(path);
  //     target.add(content).then((res) => {
  //       resolve();
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     })
  //   })
  // }
  //
  // readCollection(path)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.afs.collection(path).snapshotChanges().subscribe((col: any) => {
  //       let res = [];
  //       col.map((doc: any) => {
  //         let data = doc.payload.doc.data();
  //         let id = doc.payload.doc.id;
  //         res.push({ id, ...data});
  //       })
  //       resolve(res);
  //     })
  //   });
  // }
  //
  // readCollectionWithSort(path, prop, direction)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.afs.collection(path, ref => ref
  //       .orderBy(prop, direction)
  //     ).snapshotChanges().subscribe((col: any) => {
  //       let res = [];
  //       col.map((doc: any) => {
  //         let data = doc.payload.doc.data();
  //         let id = doc.payload.doc.id;
  //         res.push({ id, ...data});
  //       })
  //       resolve(res);
  //     })
  //   });
  // }
  //
  // readCollectionWithFilter(path, prop, symbol, value)
  // {
  //   return new Promise((resolve, reject) => {
  //     this.afs.collection(path, ref => ref
  //       .where(prop, symbol, value)
  //     ).snapshotChanges().subscribe((col: any) => {
  //       let res = [];
  //       col.map((doc: any) => {
  //         let data = doc.payload.doc.data();
  //         let id = doc.payload.doc.id;
  //         res.push({ id, ...data});
  //       })
  //       resolve(res);
  //     })
  //   });
  // }

//****************** End of Angularfirestore ******************
}
