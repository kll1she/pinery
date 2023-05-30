import { AttractionModel } from 'src/app/modules/attractionmodel';
import { attractions } from './../../../data/attractions';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attractions-content',
  template: `<div class="container">
              <h2 class="page-name">Достопримечательности</h2>
                <div class="fx ai-c attr-block" *ngFor="let attr of attractions">
                  <img [src]="attr.img" [alt]="attr.title" class="img">
                  <div class="text-block">
                    <p class="heading mb25">{{attr.title}}</p>
                    <div class="fx location mb25">
                      <img src="assets/img/geo.svg" alt="location" class="icon">
                      <p class="text halfwidth">{{attr.location}}</p>
                    </div>
                    <p class="text">Вид отдыха: {{attr.type}}</p>
                  </div>
                </div>
            </div>`,
  styleUrls: ['./attractions-content.component.scss']
})
export class AttractionsContentComponent {
  attractions: AttractionModel[] = attractions;
}
