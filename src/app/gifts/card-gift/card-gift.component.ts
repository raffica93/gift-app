import { Component, Input } from '@angular/core';
import { Gift } from '../interfaccia/gift.interface';

@Component({
  selector: 'app-card-gift',
  templateUrl: './card-gift.component.html',
  styleUrls: ['./card-gift.component.css']
})
export class CardGiftComponent {
@Input('gift') gift!:Gift


}
