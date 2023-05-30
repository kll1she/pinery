import { Component } from '@angular/core';

@Component({
  selector: 'app-home-content',
  template: `<div class="home-header">
              <div class="container">
                  <h1 class="heading">Отдых в Омской области</h1>
              </div>
            </div>
            <div class="container">
              <h2 class="page-name">Актуальные туры</h2>
            </div>
            <app-table></app-table>
            <app-add></app-add>`,
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {

}
