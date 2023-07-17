import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

export interface Locale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private langIds: any = [];
  currentLang: BehaviorSubject<string> = new BehaviorSubject('en');

  constructor(private translate: TranslateService) {
    this.translate.addLangs([environment.defaultLanguage]);
    this.translate.setDefaultLang(environment.defaultLanguage);
  }

  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      this.translate.setTranslation(locale.lang, locale.data, true);
      this.langIds.push(locale.lang);
    });

    this.translate.addLangs(this.langIds);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang.next(event.lang);
      localStorage.setItem('language', event.lang);
      if (event.lang == 'ar') {
        document.getElementById('html')?.setAttribute('lang', 'ar');
        document.getElementById('html')?.setAttribute('dir', 'rtl');
        document.getElementById('html')?.setAttribute('direction', 'rtl');
        document.getElementById('html')?.setAttribute('style', 'direction: rtl');
        document.getElementById('_body')?.setAttribute('style', 'text-align: right !important; ');
      } else {
        
        document.getElementById('html')?.setAttribute('lang', 'en');
        document.getElementById('html')?.setAttribute('dir', 'ltr');
        document.getElementById('html')?.setAttribute('direction', 'ltr');
        document.getElementById('html')?.setAttribute('style', 'direction: ltr ;');
        document.getElementById('_body')?.setAttribute('style', 'text-align: left !important;');

      }
    });
  }


  setLanguage(lang: any) {
    if (lang) {
      this.translate.use(lang);
      localStorage.setItem('language', lang);

    }
  }


  getSelectedLanguage(): any {
    return localStorage.getItem('language') || this.translate.getDefaultLang();
  }
}
