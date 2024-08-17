import { Component } from '@angular/core';
import { BadgeComponent } from '@SVV/common/ui';

@Component({
  selector: 'svv-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  providers: [BadgeComponent],
  imports: [BadgeComponent],
})
export class ProjectComponent {}
