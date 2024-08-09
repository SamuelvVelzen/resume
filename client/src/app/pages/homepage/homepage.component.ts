import { Component } from '@angular/core';
import { NavbarComponent } from '../../ui/nav/navbar/navbar.component';

@Component({
  selector: 'svv-homepage',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {
  constructor() {}
}
