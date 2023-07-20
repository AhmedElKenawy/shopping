import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/core/services';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss'],
})
export class SwitchLanguageComponent implements OnInit {
  lang!: string;
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentLang.subscribe((res) => (this.lang = res));
  }


  toggleLanguage() {
    this.lang = this.lang === 'en' ? 'ar' : 'en';
    this.translationService.setLanguage(this.lang);
  }
}
