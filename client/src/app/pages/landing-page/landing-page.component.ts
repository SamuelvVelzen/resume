import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrowserTitleService } from '@SVV/util/browser-title.service';
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

  constructor(private _browserTitleService: BrowserTitleService) {
    this._browserTitleService.setTitle('Resume');
  }
}
