import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyimage',
  templateUrl: './lazyimage.component.html',
  styleUrls: ['./lazyimage.component.css']
})
export class LazyimageComponent {

  loader: boolean = false
  @Input() public url!: string
  @Input() public alt: string = ""


  onload() {
    setTimeout(() => {
      this.loader = true
    }, 1000)

  }
}
