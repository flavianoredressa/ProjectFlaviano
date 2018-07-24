import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsAttractionsPage } from './details-attractions';

@NgModule({
  declarations: [
    DetailsAttractionsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsAttractionsPage),
  ],
})
export class DetailsAttractionsPageModule {}
