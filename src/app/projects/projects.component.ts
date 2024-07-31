import { Component } from '@angular/core';
import { CertificationsComponent } from "./certifications/certifications.component";
import { AchievementsComponent } from "./achievements/achievements.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CertificationsComponent, AchievementsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      "name": "Share and Sustain",
      "description": "Food Waste Management Website using Django and Bootstrap",
      "link": "https://github.com/sricharanreddy11/food-waste-management",
      "logo": "https://img.icons8.com/?size=100&id=37o3DqV429ra&format=png&color=000000"
    },
    {
      "name": "Abandoned Object Detection",
      "description": "Implemented a smart video surviallance system to detect abandoned object.",
      "link": "https://github.com/sricharanreddy11/abandoned-object-detection",
      "logo": "https://img.icons8.com/?size=100&id=12592&format=png&color=000000"
    },
    {
      "name": "inConnector",
      "description": "Chrome Extension to use for jon networking and searches",
      "link": "https://github.com/sricharanreddy11/inConnector",
      "logo": "https://img.icons8.com/?size=100&id=39854&format=png&color=000000"
    },
    
  ]
}
