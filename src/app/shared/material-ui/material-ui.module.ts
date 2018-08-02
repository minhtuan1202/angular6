import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports:[
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class MaterialUiModule { }
