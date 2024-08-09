import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES_SEGMENTS } from '../routes-segments';

@Component({
  selector: 'svv-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [RouterLink],
  standalone: true,
})
export class LandingPageComponent {
  routesSegments = ROUTES_SEGMENTS;
}
