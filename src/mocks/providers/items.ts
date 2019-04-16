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
        "isShared": false,
        "status": "online",
        "distance": "2.54km",
        "profilePic": "assets/img/mp287.jpg",
        "inklevel": 97,
        "paperlevel": 23,
      },
      {
        "name": "我办公室里的",
        "model": "Canon G2000",
        "isOwner": true,
        "isShared": false,
        "status": "oop",
        "distance": "0.1km",
        "profilePic": "assets/img/g2000.jpg",
        "inklevel": 97,
        "paperlevel": 23,
      },
      {
        "name": "隔壁老王家里",
        "model": "Brother HL2260",
        "isOwner": false,
        "isShared": false,
        "status": "ooi",
        "distance": "2.90km",
        "profilePic": "assets/img/hl2260.jpg",
        "inklevel": 2,
        "paperlevel": 34,
      },
      {
        "name": "领导办公室",
        "model": "HP M104",
        "isOwner": false,
        "isShared": false,
        "status": "offline",
        "distance": "0.1km",
        "profilePic": "assets/img/m104.jpg",
        "inklevel": 67,
        "paperlevel": 213,
      },
      {
        "name": "一教二楼自助",
        "model": "EPSON L220",
        "isOwner": true,
        "isShared": true,
        "status": "eom",
        "distance": "0.1km",
        "profilePic": "assets/img/l220.jpg",
        "inklevel": 54,
        "paperlevel": 34,
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
