import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { AttractionsProvider } from '../../providers/attractions/attractions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any[] = []
  dataFilter: any[] = []
  constructor(
    protected navCtrl: NavController, 
    protected Attractions: AttractionsProvider,
    protected Modal: ModalController,
    protected Toast: ToastController) {
    this.getAttractions()
  }
  getAttractions() {
    this.Attractions.getAttractions()
      .then((res: any) => {
        res.forEach(element => {
          var find = false
          this.data.forEach(element2 => {
            if (element.id == element2.id)
              find = true
          })
          if (!find)
            this.data.push(element)
        })
        this.dataFilter = this.data
      })
      .catch((erro) => {
        this.Toast.create({
          duration: 3000,
          message: 'Something unexpected happened, try again'
        }).present()
      })
  }
  Details(item: any) {
    this.Modal.create('DetailsAttractionsPage', {item: item}).present()
  }
  GetMore() {
    this.getAttractions()
  }
  getAdventure(ev){
      let val = ev.target.value;
      this.data = [];
      if (this.dataFilter == null)
        return;
      this.dataFilter.forEach(element => {
        this.data.push(element);
      });
      if (!val || !val.trim() || val.length < 3) {
        return;
      }
      else {
        for (let item of this.dataFilter) {
          if (item.adventures.toUpperCase().indexOf(val.toUpperCase()) == -1) {
            this.data.splice(this.data.indexOf(item), 1);
          }
        }
      }
    }

}
