import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public items: Items
  )
  {
  }

  ionViewDidLoad()
  {
    this.getItems();
  }

  getItems()
  {
    this.currentItems = this.items.query({
      isShared: true
    })
  }

   searchItems(ev: any)
   {
     // Reset items back to all of the items
     this.getItems();

     // set val to the value of the searchbar
     let val = ev.target.value;
     console.log(val)

     // if the value is an empty string don't filter the items
     if (val && val.trim() != '') {
       this.currentItems = this.currentItems.filter((item) => {
         return (item.name.toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
       })
     }
   }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
