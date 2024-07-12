import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './genesis/project/project.component';
import { StudioComponent } from './genesis/studio/studio.component';
import { WorkbenchComponent } from './workbench.component';

const routes: Routes = [
  {
    path: 'workbench',
    component: WorkbenchComponent,
    data: {
      breadcrumb: 'Workbench',
    },
    children: [
      {
        path: 'genesis',
        component: WorkbenchComponent,
        data: {
          breadcrumb: 'Genesis',
        },
        children: [
          {
            path: 'project',
            component: ProjectComponent,
            data: {
              breadcrumb: 'Project',
            },
          },
          {
            path: 'studio',
            component: StudioComponent,
            data: {
              breadcrumb: 'Studio',
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkbenchRoutingModule {}
