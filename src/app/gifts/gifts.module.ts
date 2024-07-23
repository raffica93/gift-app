import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { GiftsComponent } from './gifts.component';
import { CardGiftComponent } from './card-gift/card-gift.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,GiftsComponent, CardGiftComponent
  ],
  imports: [
    CommonModule,SharedModule
  ], exports: [
      HomeComponent]
})
export class GiftsModule { }
