import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[svvIconPlacement]',
  standalone: true,
  templateUrl: './icon-placement.component.html',
  styleUrls: ['./icon-placement.component.scss'],
  imports: [NgTemplateOutlet, NgClass, NgIf],
})
export class IconPlacementComponent {
  @Input('svvIconPlacement') icon?: string = '';
  @Input() position: 'start' | 'end' = 'start';
}
