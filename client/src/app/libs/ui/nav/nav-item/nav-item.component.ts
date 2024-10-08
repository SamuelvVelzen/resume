import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconPlacementComponent } from '../../icon/icon-placement/icon-placement.component';

@Component({
  selector: 'svv-nav-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, IconPlacementComponent],
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input({ required: true }) path!: string;

  @Input() bodyClass?: string;

  @Input() icon?: string;
}
