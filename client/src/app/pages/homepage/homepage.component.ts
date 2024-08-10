import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavItemComponent } from '../../ui/nav/nav-item/nav-item.component';
import { NavbarComponent } from '../../ui/nav/navbar/navbar.component';

@Component({
  selector: 'svv-homepage',
  standalone: true,
  imports: [NavbarComponent, NavItemComponent, RouterOutlet],
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {
  email = 'SamuelvVelzen&#64;iCloud.com';
  phoneNumber = '+316 27 54 28 94';
}
