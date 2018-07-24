import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsAttractionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-attractions',
  templateUrl: 'details-attractions.html',
})
export class DetailsAttractionsPage {
  item: any
  like = false
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item
    // // localStorage.setItem('L', JSON.stringify(this.item))
    // this.item = JSON.parse(localStorage.getItem('L'))
  }

  closeModal(){
    this.navCtrl.pop()
  }
  Like(){
    this.like = !this.like
  }
}
