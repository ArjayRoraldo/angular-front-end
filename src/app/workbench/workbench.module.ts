import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProjectModule } from './genesis/project/project.module';
import { WorkbenchRoutingModule } from './workbench-routing.module';
import { WorkbenchComponent } from './workbench.component';

@NgModule({
  declarations: [WorkbenchComponent],
  imports: [
    CommonModule,
    WorkbenchRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    ProjectModule,
  ],
})
export class WorkbenchModule {}
