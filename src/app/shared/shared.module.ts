import { MaterialUiModule } from './material-ui/material-ui.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule,
    MaterialUiModule,
  ],
  exports:[
    FlexLayoutModule,
    MaterialUiModule
  ],
  declarations: [

  ]
})
export class SharedModule { }
