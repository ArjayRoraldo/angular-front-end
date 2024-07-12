import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: {
      breadcrumb: 'Dashboard',
    },
  },
  {
    path: 'workbench',
    loadChildren: () =>
      import('./workbench/workbench.module').then((m) => m.WorkbenchModule),
    data: {
      breadcrumb: 'Workbench',
    },
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
