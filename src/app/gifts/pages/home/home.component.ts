import { Component } from '@angular/core';
import { GiftsService } from './../../gift.service';
import { Gift } from '../../interfaccia/gift.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private giftsService: GiftsService) {
    
  }

  get gift(): Gift[] {
    return this.giftsService.gifList;
  }


}

