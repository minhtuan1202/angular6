import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UtilityService {
  constructor(public translate:TranslateService) { 
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}

 
