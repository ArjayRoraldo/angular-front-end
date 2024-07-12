import { Component } from '@angular/core';
import { TranslationLoaderService } from './service/translate-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;

  constructor(private translationLoaderService: TranslationLoaderService) {}

  switchLanguage(language: string) {
    this.translationLoaderService.switchLanguage('it');
  }
}
