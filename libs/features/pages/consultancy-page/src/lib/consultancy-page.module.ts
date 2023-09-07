import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { CardsModule } from '@elewa-website/elements/cards'

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaWebsiteLearningServicesComponent } from './components/elewa-website-learning-services/elewa-website-learning-services.component';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule, CardsModule],
  declarations: [
    ConsultancyPageComponent,
    ElewaWebsiteLearningServicesComponent,
  ],
  exports: [ElewaWebsiteLearningServicesComponent]
})
export class ConsultancyPageModule {}
