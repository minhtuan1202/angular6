import { Component } from '@angular/core';
import { UtilityService } from './core/service/utility.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
 }

 useLanguage(language: string) {
  this.translate.use(language);
}
}
