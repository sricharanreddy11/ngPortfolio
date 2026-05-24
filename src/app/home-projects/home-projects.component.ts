import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { projects } from '../projects/projects.data';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-home-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.css']
})
export class HomeProjectsComponent {
  previewProjects: Project[] = projects.slice(0, 3);
  totalProjects = projects.length;
}
