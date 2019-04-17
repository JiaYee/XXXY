import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor() {
    let items = [
      {
        "name": "我家书房霸王机",
        "model": "Canon MP287",
        "isOwner": true,
        "isFriend": false,
        "isShared": false,
        "status": "online",
        "distance": "2.54",
        "profilePic": "assets/img/mp287.jpg",
        "inklevel": 97,
        "paperlevel": 23,
        "headclean": 43,
        "headreplace": 12,
        "bodycheck": 32,
        "lastclean": "2019-03-05 03:31:13",
        "lastreplace": "2019-02-02 11:27:56",
        "lastcheck": "2019-04-13 16:03:42",
      },
      {
        "name": "我办公室里的",
        "model": "Canon G2000",
        "isOwner": true,
        "isFriend": true,
        "isShared": false,
        "status": "oop",
        "distance": "0.1",
        "profilePic": "assets/img/g2000.jpg",
        "inklevel": 97,
        "paperlevel": 3,
        "headclean": 78,
        "headreplace": 56,
        "bodycheck": 35,
        "lastclean": "2019-01-07 15:51:40",
        "lastreplace": "2019-01-08 22:06:08",
        "lastcheck": "2019-01-08 22:06:08",
      },
      {
        "name": "隔壁老王家里",
        "model": "Brother HL2260",
        "isOwner": false,
        "isFriend": true,
        "isShared": false,
        "status": "ooi",
        "distance": "2.90",
        "profilePic": "assets/img/hl2260.jpg",
        "inklevel": 2,
        "paperlevel": 34,
        "headclean": 90,
        "headreplace": 57,
        "bodycheck": 35,
        "lastclean": "2019-01-13 06:31:05",
        "lastreplace": "2019-01-20 16:23:12",
        "lastcheck": "2019-03-20 00:48:40",
      },
      {
        "name": "领导办公室",
        "model": "HP M104",
        "isOwner": false,
        "isFriend": true,
        "isShared": false,
        "status": "offline",
        "distance": "0.1",
        "profilePic": "assets/img/m104.jpg",
        "inklevel": 67,
        "paperlevel": 213,
        "headclean": 66,
        "headreplace": 55,
        "bodycheck": 44,
        "lastclean": "2019-03-13 05:19:39",
        "lastreplace": "2019-03-09 03:47:15",
        "lastcheck": "2019-02-23 22:25:38",
      },
      {
        "name": "一教二楼自助",
        "model": "EPSON L220",
        "isOwner": true,
        "isFriend": false,
        "isShared": true,
        "status": "eom",
        "distance": "0.10",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
        "headclean": 34,
        "headreplace": 50,
        "bodycheck": 64,
        "lastclean": "2019-02-28 12:51:58",
        "lastreplace": "2019-03-18 20:39:42",
        "lastcheck": "2019-01-02 18:22:56",
      },
      {
        "name": "一教三楼自助",
        "model": "EPSON L220",
        "isOwner": false,
        "isFriend": false,
        "isShared": true,
        "status": "online",
        "distance": "0.10",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
        "headclean": 34,
        "headreplace": 50,
        "bodycheck": 64,
        "lastclean": "2019-02-28 12:51:58",
        "lastreplace": "2019-03-18 20:39:42",
        "lastcheck": "2019-01-02 18:22:56",
      },
      {
        "name": "一教四楼自助",
        "model": "EPSON L220",
        "isOwner": false,
        "isFriend": false,
        "isShared": true,
        "status": "online",
        "distance": "0.10",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
        "headclean": 34,
        "headreplace": 50,
        "bodycheck": 64,
        "lastclean": "2019-02-28 12:51:58",
        "lastreplace": "2019-03-18 20:39:42",
        "lastcheck": "2019-01-02 18:22:56",
      },
      {
        "name": "一教五楼自助",
        "model": "EPSON L220",
        "isOwner": false,
        "isFriend": false,
        "isShared": true,
        "status": "online",
        "distance": "0.10",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
        "headclean": 34,
        "headreplace": 50,
        "bodycheck": 64,
        "lastclean": "2019-02-28 12:51:58",
        "lastreplace": "2019-03-18 20:39:42",
        "lastcheck": "2019-01-02 18:22:56",
      },
      {
        "name": "图书馆自助打印1号机",
        "model": "EPSON L220",
        "isOwner": false,
        "isFriend": false,
        "isShared": true,
        "status": "online",
        "distance": "0.30",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
        "headclean": 34,
        "headreplace": 50,
        "bodycheck": 64,
        "lastclean": "2019-02-28 12:51:58",
        "lastreplace": "2019-03-18 20:39:42",
        "lastcheck": "2019-01-02 18:22:56",
      },
      {
        "name": "图书馆自助打印2号机",
        "model": "EPSON L220",
        "isOwner": false,
        "isFriend": false,
        "isShared": true,
        "status": "online",
        "distance": "0.30",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
        "headclean": 34,
        "headreplace": 50,
        "bodycheck": 64,
        "lastclean": "2019-02-28 12:51:58",
        "lastreplace": "2019-03-18 20:39:42",
        "lastcheck": "2019-01-02 18:22:56",
      },
      {
        "name": "学生公寓3号楼203",
        "model": "EPSON L220",
        "isOwner": false,
        "isFriend": false,
        "isShared": true,
        "status": "online",
        "distance": "0.50",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
        "headclean": 34,
        "headreplace": 50,
        "bodycheck": 64,
        "lastclean": "2019-02-28 12:51:58",
        "lastreplace": "2019-03-18 20:39:42",
        "lastcheck": "2019-01-02 18:22:56",
      },
      {
        "name": "快印文印店自助打印8号机",
        "model": "EPSON L220",
        "isOwner": false,
        "isFriend": false,
        "isShared": true,
        "status": "online",
        "distance": "3.70",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
        "headclean": 34,
        "headreplace": 50,
        "bodycheck": 64,
        "lastclean": "2019-02-28 12:51:58",
        "lastreplace": "2019-03-18 20:39:42",
        "lastcheck": "2019-01-02 18:22:56",
      },
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
