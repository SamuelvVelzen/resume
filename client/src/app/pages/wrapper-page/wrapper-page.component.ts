import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkComponent } from '@SVV/ui/link/link/link.component';
import { NavItemComponent } from '@SVV/ui/nav/nav-item/nav-item.component';
import { NavbarComponent } from '@SVV/ui/nav/navbar/navbar.component';

@Component({
  selector: 'svv-wrapper-page',
  imports: [NavbarComponent, NavItemComponent, RouterOutlet, LinkComponent],
  templateUrl: './wrapper-page.component.html',
  styleUrls: ['./wrapper-page.component.scss'],
  standalone: true,
})
export class WrapperPageComponent {}
