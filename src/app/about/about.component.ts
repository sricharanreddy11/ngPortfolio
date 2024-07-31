import { Component } from '@angular/core';
import { SkillsComponent } from "./skills/skills.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsComponent, EducationComponent, ExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
