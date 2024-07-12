import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDevelopmentComponent } from '../shared/model-development/model-development.component';
import { ModelValidationComponent } from '../shared/model-validation/model-validation.component';
import { ProjectComponent } from './genesis/project/project.component';
import { StudioComponent } from './genesis/studio/studio.component';

const routes: Routes = [
  {
    path: 'genesis',
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
        children: [
          {
            path: 'development',
            component: ModelDevelopmentComponent,
            data: {
              breadcrumb: 'Model Development',
            },
          },
          {
            path: 'validation',
            component: ModelValidationComponent,
            data: {
              breadcrumb: 'Model Validation',
            },
          },
          {
            path: '',
            redirectTo: '/workbench/genesis/project/development',
            pathMatch: 'full',
          },
        ],
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkbenchRoutingModule {}
