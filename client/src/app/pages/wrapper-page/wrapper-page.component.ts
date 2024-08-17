import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  LinkComponent,
  NavbarComponent,
  NavItemComponent,
} from '@SVV/common/ui';

@Component({
  selector: 'svv-wrapper-page',
  imports: [NavbarComponent, NavItemComponent, RouterOutlet, LinkComponent],
  templateUrl: './wrapper-page.component.html',
  styleUrls: ['./wrapper-page.component.scss'],
  standalone: true,
})
export class WrapperPageComponent {}
