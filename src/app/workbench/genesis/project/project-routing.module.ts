import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ModelDevelopmentComponent } from 'src/app/shared/model-development/model-development.component';
import { ModelValidationComponent } from 'src/app/shared/model-validation/model-validation.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      {
        path: 'development',
        component: ModelDevelopmentComponent,
      },
      {
        path: 'validation',
        component: ModelValidationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
