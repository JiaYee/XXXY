import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Bmob from "hydrogen-js-sdk";

/*
  Generated class for the BmobProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BmobProvider {

  constructor(
    public http: HttpClient
  )
  {
    Bmob.initialize("0547a23a2a9a666412483a7ae10cb5e5", "80dca428dba5f46448e6f3d1fc3a5a0e");
  }

  login(username, password)
  {
    return new Promise((resolve, reject) => {
      Bmob.User.login(username, password).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    })
  }

  createData(tablename, prop, value)
  {
    return new Promise((resolve, reject) => {
      let query = Bmob.Query(tablename);
      query.set(prop, value);
      query.save().then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    })
  }

  listData(tablename)
  {
    return new Promise((resolve, reject) => {
      let query = Bmob.Query(tablename);
      query.find().then((res) => {
        resolve(res);
      })
    })
  }

  countData(tablename)
  {
    return new Promise((resolve, reject) => {
      let query = Bmob.Query(tablename);
      query.count().then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }


}
