import { HotelModel } from 'src/app/modules/hotelmodel';
import { hotels } from './../../../data/hotels';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels-content',
  template: `<div class="container">
              <h2 class="page-name">Отели</h2>
                <div class="fx ai-c hotel-block" *ngFor="let hotel of hotels">
                  <img [src]="hotel.img" [alt]="hotel.title" class="img">
                  <div class="text-block">
                    <p class="heading mb25">{{hotel.title}}</p>
                    <div class="fx location mb25">
                      <img src="assets/img/geo.svg" alt="location" class="icon">
                      <p class="text halfwidth">{{hotel.location}}</p>
                    </div>
                    <p class="text">Рейтинг: {{hotel.rating}}</p>
                  </div>
                </div>
            </div>`,
  styleUrls: ['./hotels-content.component.scss']
})
export class HotelsContentComponent {
  hotels: HotelModel[] = hotels;
}
