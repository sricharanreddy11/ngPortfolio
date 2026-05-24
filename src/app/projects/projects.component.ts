import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { projects } from './projects.data';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = projects;
  expandedIndex: number | null = null;

  toggleProject(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
