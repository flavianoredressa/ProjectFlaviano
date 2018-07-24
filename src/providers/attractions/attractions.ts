import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class AttractionsProvider {

  constructor(protected http: HttpClient, protected load: LoadingController) { }
  url: string = 'https://firebase.lyfx.co/adventures-lab';

  getAttractions() {
    let l = this.load.create({
      content: 'Searching...'
    })
    l.present()
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe((res: any) => {
        resolve(res)
        l.dismiss()
      }, (error: HttpErrorResponse) => {
        reject(error)
        l.dismiss()
      })
    })
  }
}
