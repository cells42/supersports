import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ShoesListComponent } from './shoes/shoes-list.component';
import { StarRatingComponent } from './shared/star-rating.component';
import { HeaderComponent } from './shared/header.component';
import { ContactComponent } from './shared/contact.component';
import {RouterModule} from "@angular/router";
import {ShoeDetailComponent} from './shoes/shoes-detail.component';
import { DemoDataService} from './shared/demo-data.service';
import {FooterComponent} from "./shared/footer.component";
import {SliderComponent} from "./shared/slider.component";

@NgModule({
  imports:
    [ BrowserModule,FormsModule,
    RouterModule.forRoot([
      { path: 'home', component:ShoesListComponent },
      { path: 'contact', component: ContactComponent},
      { path: 'shoes/:id', component: ShoeDetailComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full'},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ])],
  declarations: [ AppComponent, ShoesListComponent,StarRatingComponent,HeaderComponent,SliderComponent,ContactComponent,ShoeDetailComponent,FooterComponent],
  providers: [DemoDataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
