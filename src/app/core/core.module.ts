import { UtilityService } from './service/utility.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { httpLoaderFactory } from './service/http-loader-factory.service';

@NgModule({
  imports: [
    CommonModule,
  //   HttpClientModule,
  //   TranslateModule.forRoot({
  //     loader: {
  //        provide: TranslateLoader,
  //        useFactory: httpLoaderFactory,
  //        deps: [HttpClient]
  //     }
  //  }),
  ],
  exports:[
    UtilityService
  ],
})
export class CoreModule { }
