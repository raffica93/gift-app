import { Component, ElementRef, ViewChild, asNativeElements } from '@angular/core';
import { GiftsService } from '../../gift.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('valoreDiRicerca') valoreDiRicerca!: ElementRef<HTMLInputElement>;

  constructor(private giftsComponentService:GiftsService) { }
  // search(x:string){
  //   console.log(x)
  // }
  searchNew(){
    // console.log(this.valoreDiRicerca.nativeElement.value)
    // ti fai dare dal servizio làlista di gift
    this.giftsComponentService.searchTagObservable(this.valoreDiRicerca.nativeElement.value)
    this.valoreDiRicerca.nativeElement.value = ''
  }
}
