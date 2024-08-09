import { Routes } from '@angular/router';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ROUTES_SEGMENTS } from './pages/routes-segments';
import { WrapperPageComponent } from './pages/wrapper-page/wrapper-page.component';

export const routes: Routes = [
  {
    path: ROUTES_SEGMENTS.root,
    component: WrapperPageComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
        pathMatch: 'prefix',
      },
      {
        path: ROUTES_SEGMENTS.aboutMe,
        component: AboutMePageComponent,
      },
    ],
  },
];
