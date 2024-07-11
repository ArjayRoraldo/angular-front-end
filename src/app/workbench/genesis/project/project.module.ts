import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ModelDevelopmentComponent } from 'src/app/shared/model-development/model-development.component';
import { ModelValidationComponent } from 'src/app/shared/model-validation/model-validation.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ModelDevelopmentComponent,
    ModelValidationComponent,
    AddFormComponent,
  ],
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
  ],
})
export class ProjectModule {}
