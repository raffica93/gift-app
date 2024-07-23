import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LazyimageComponent } from './lazyimage/lazyimage.component';



@NgModule({
  declarations: [SidebarComponent, LazyimageComponent],
  imports: [
    CommonModule
  ], 
  exports: [SidebarComponent,LazyimageComponent]
})
export class SharedModule { }
