import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkComponent } from '../../ui/link/link/link.component';
import { NavItemComponent } from '../../ui/nav/nav-item/nav-item.component';
import { NavbarComponent } from '../../ui/nav/navbar/navbar.component';

@Component({
  selector: 'svv-wrapper-page',
  imports: [NavbarComponent, NavItemComponent, RouterOutlet, LinkComponent],
  templateUrl: './wrapper-page.component.html',
  styleUrls: ['./wrapper-page.component.scss'],
  standalone: true,
})
export class WrapperPageComponent {}
