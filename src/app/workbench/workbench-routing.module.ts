import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './genesis/project/project.component';
import { StudioComponent } from './genesis/studio/studio.component';
import { WorkbenchComponent } from './workbench.component';

const routes: Routes = [
  {
    path: 'workbench',
    component: WorkbenchComponent,
    children: [
      {
        path: 'project',
        component: ProjectComponent,
      },
      {
        path: 'studio',
        component: StudioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkbenchRoutingModule {}
