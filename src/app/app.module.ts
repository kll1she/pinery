import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeContentComponent } from './components/home-page/home-content/home-content.component';
import { AttractionsComponent } from './components/attractions/attractions.component';
import { AttractionsContentComponent } from './components/attractions/attractions-content/attractions-content.component';
import { AboutComponent } from './components/about/about.component';
import { AboutContentComponent } from './components/about/about-content/about-content.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsContentComponent } from './components/contacts/contacts-content/contacts-content.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelsContentComponent } from './components/hotels/hotels-content/hotels-content.component';
import { TableComponent } from './components/home-page/home-content/table/table.component';
import { AddComponent } from './components/home-page/home-content/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    AttractionsComponent,
    AttractionsContentComponent,
    AboutComponent,
    AboutContentComponent,
    ContactsComponent,
    ContactsContentComponent,
    HotelsComponent,
    HotelsContentComponent,
    TableComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
