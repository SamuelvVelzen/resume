import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ROUTES_SEGMENTS } from './pages/routes-segments';

export const routes: Routes = [
  { path: ROUTES_SEGMENTS.root, redirectTo: ROUTES_SEGMENTS.home },
  { path: ROUTES_SEGMENTS.home, component: HomepageComponent },
];
