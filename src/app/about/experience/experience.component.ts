import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experience = [
    {
      "role": "Software Developer Intern",
      "organisation": "Adjoint Technologies",
      "duration": "Jan 2024 - May 2024",
    }
  ]
}
