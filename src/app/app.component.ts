import { Component, OnInit } from '@angular/core';
import { TranslationService } from './core/services';
import { locale as arLang } from './core/i18n/ar';
import { locale as enLang } from './core/i18n/en';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopping';
  constructor(private translationService: TranslationService) {
    this.loadAvailableLangueFiles()
  }
  
  ngOnInit(): void {
    this.initDefaultLanguage()
  }
  loadAvailableLangueFiles(){
    this.translationService.loadTranslations(enLang, arLang);
    
  }
  initDefaultLanguage(): void {
    this.translationService.setLanguage(
      this.translationService.getSelectedLanguage()
    );
  }

}
