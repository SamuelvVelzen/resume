import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconPlacementComponent } from '../../ui/icon/icon-placement/icon-placement.component';
import { NavItemComponent } from '../../ui/nav/nav-item/nav-item.component';
import { NavbarComponent } from '../../ui/nav/navbar/navbar.component';

@Component({
  selector: 'svv-homepage',
  standalone: true,
  imports: [
    NavbarComponent,
    NavItemComponent,
    RouterOutlet,
    IconPlacementComponent,
  ],
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {
  email = 'SamuelvVelzen&#64;iCloud.com';
  phoneNumber = '+316 27 54 28 94';
}
