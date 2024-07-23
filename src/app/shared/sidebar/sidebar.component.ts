import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GiftsService } from './../../gifts/gift.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


 listra:string[]=[]
  constructor(private giftsService :GiftsService) {
    // this.lista=this.giftsService.tagsHistory
    // console.warn(this.lista)

   }

  //  con il get me fa partrire il metodo ogni volta
   get lista(){
    return this.giftsService.tagsHistory
   }
 
   ricerca(tag:string){

    this.giftsService.searchTagObservable(tag)
   }


}
