import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'tasks', component: TasklistComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
