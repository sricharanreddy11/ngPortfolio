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
      "education": "Bachelor of Engineering",
      "college": "Vasavi College Of Engineering",
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
