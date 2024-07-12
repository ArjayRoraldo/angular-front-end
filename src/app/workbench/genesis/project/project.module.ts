import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddFormComponent } from 'src/app/shared/add-form/add-form.component';
import { CustomValidator } from 'src/app/shared/add-form/service/custom-validator.service';
import { AddDataService } from 'src/app/shared/service/add-data.service';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [ProjectComponent, AddFormComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzLayoutModule,
    NzButtonModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputModule,
    MatDialogModule,
  ],
  providers: [CustomValidator, AddDataService],
})
export class ProjectModule {}
