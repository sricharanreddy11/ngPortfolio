import { Component } from '@angular/core';
import { CertificationsComponent } from "../certifications/certifications.component";
import { AchievementsComponent } from "../achievements/achievements.component";
import { AboutComponent } from "../about/about.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CertificationsComponent, AchievementsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    data = {
      "name" : "Sri Charan Reddy",
      "role": "Software Developer",
      "description": "I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
      "github":"https://github.com/sricharanreddy11",
      "linkedin":"https://www.linkedin.com/in/sricharanreddy11/",
      "mail":"mailto:sricharanteegala@gmail.com",
      "twitter":"https://x.com/charanreddy_11",
    }
}
