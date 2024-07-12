import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslationLoaderService {
  constructor(private translate: TranslateService, private http: HttpClient) {
    this.initializeTranslation();
  }

  private initializeTranslation() {
    this.translate.addLangs(['en', 'fr']); // Add supported languages
    this.translate.setDefaultLang('en'); // Set the default language

    // Load translations
    this.http
      .get(`./assets/i18n/${this.translate.getDefaultLang()}.json`)
      .pipe(map((res: any) => res.default))
      .subscribe((translations) => {
        this.translate.setTranslation(
          this.translate.getDefaultLang(),
          translations
        );
      });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.http
      .get(`./assets/i18n/${language}.json`)
      .pipe(map((res: any) => res.default))
      .subscribe((translations) => {
        this.translate.setTranslation(language, translations);
      });
  }
}
