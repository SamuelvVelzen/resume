import { Routes } from '@angular/router';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ROUTES_SEGMENTS } from './pages/routes-segments';
import { WrapperPageComponent } from './pages/wrapper-page/wrapper-page.component';

export const routes: Routes = [
  {
    path: ROUTES_SEGMENTS.root,
    component: LandingPageComponent,
  },
  {
    path: ROUTES_SEGMENTS.resume,
    component: WrapperPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ROUTES_SEGMENTS.home,
      },
      {
        path: ROUTES_SEGMENTS.home,
        component: HomepageComponent,
      },
      {
        path: ROUTES_SEGMENTS.aboutMe,
        component: AboutMePageComponent,
      },
    ],
  },
];
