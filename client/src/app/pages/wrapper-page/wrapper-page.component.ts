import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkComponent } from '@SVV/ui/link/link/link.component';
import { NavItemComponent } from '@SVV/ui/nav/nav-item/nav-item.component';
import { NavbarComponent } from '@SVV/ui/nav/navbar/navbar.component';
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
  homePath = `${ROUTES_SEGMENTS.resume}/${ROUTES_SEGMENTS.home}`;
  projectPath = `${ROUTES_SEGMENTS.resume}/${ROUTES_SEGMENTS.projects}`;
}
