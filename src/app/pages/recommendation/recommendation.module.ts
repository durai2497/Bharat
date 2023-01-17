import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RecommendationPage } from './recommendation.page';

import {  RecommendationPageRoutingModule } from './recommendation-routing.module';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationPageRoutingModule
  ],
  declarations: [RecommendationPage,ProfileCardComponent]
})
export class RecommendationPageModule {}
