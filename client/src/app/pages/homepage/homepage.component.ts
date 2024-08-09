import { Component } from '@angular/core';
import { NavItemComponent } from '../../ui/nav/nav-item/nav-item.component';
import { NavbarComponent } from '../../ui/nav/navbar/navbar.component';

@Component({
  selector: 'svv-homepage',
  standalone: true,
  imports: [NavbarComponent, NavItemComponent],
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {
  constructor() {}
}
