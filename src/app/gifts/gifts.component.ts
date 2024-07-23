import { Component, Input } from '@angular/core';
import { Gift } from './interfaccia/gift.interface';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent {

  @Input() gift!:Gift[];

  

}
