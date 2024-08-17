import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  LinkComponent,
  NavbarComponent,
  NavItemComponent,
} from '@SVV/common/ui';
import { ROUTES_SEGMENTS } from '../routes-segments';

@Component({
  selector: 'svv-wrapper-page',
  imports: [NavbarComponent, NavItemComponent, RouterOutlet, LinkComponent],
  templateUrl: './wrapper-page.component.html',
  styleUrls: ['./wrapper-page.component.scss'],
  standalone: true,
})
export class WrapperPageComponent {
  routesSegments = ROUTES_SEGMENTS;
  homePath = `${ROUTES_SEGMENTS.home}`;
  projectsPath = `${ROUTES_SEGMENTS.projects}`;
}
