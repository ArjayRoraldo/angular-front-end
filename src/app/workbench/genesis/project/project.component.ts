import { Component, Inject } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { Data } from 'src/app/model/data';
import { AddFormComponent } from 'src/app/shared/add-form/add-form.component';
import { AddDataService } from 'src/app/shared/service/add-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  selectedMenu: string = 'development';

  constructor() {}

  ngOnInit(): void {}

  onMenuClick(item: string): void {
    this.selectedMenu = item;
  }
}
