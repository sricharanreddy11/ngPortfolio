import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = [
    {
      "education": "MS in Computer Science and Engineering",
      "college": "University at Buffalo",
      "duration": "2025 - 2027",
      "marks": "4.0 / 4.0",
    },
    {
      "education": "Bachelor of Engineering",
      "college": "Osmania University",
      "duration": "2020 - 2024",
      "marks": "9.3 / 10",
    },
    {
      "education": "Intermediate",
      "college": "Narayana Junior College",
      "duration": "2018 - 2020",
      "marks": "990 / 1000",
    },

  ]
}
