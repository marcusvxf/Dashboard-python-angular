import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComplaintDetailsComponent } from './pages/complaint-details/complaint-details.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'complaint',
    component: ComplaintDetailsComponent,
  },
];
