import { Component, Input } from '@angular/core';
import { IconPlacementComponent } from '../../icon/icon-placement/icon-placement.component';

@Component({
  selector: 'svv-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: true,
  imports: [IconPlacementComponent],
})
export class LinkComponent {
  @Input({ required: true }) href: string = '';
  @Input() icon?: string;
}
