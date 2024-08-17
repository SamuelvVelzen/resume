import { Component } from '@angular/core';
import { ProjectComponent } from '@SVV/projects';

@Component({
  selector: 'svv-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  standalone: true,
  imports: [ProjectComponent],
})
export class ProjectPageComponent {}
