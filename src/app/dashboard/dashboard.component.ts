import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private translateService: TranslateService) {
    console.log('WORKS ');
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
  }
}
