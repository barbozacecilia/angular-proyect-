import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    MainComponent,
    ResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MainComponent,ResultComponent]
})
export class ListModule { }
