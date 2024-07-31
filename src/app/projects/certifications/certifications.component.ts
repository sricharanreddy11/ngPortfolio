import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications = [
    {
      "course": "Python API with the Django REST Framework",
      "instructor": "Justin Mitchell",
      "provider": "Udemy",
      "duration": "12 hours",
      "link": "https://drive.google.com/file/d/1L9-ZcUuXNYCVvN5vUjLoSgDsxNpUSbV6/view"
    },
    {
      "course": "Python and Django Full Stack Web Developer Bootcamp",
      "instructor": "Jose Portilla",
      "provider": "Udemy",
      "duration": "32 hours",
      "link": "https://drive.google.com/file/d/1L9-ZcUuXNYCVvN5vUjLoSgDsxNpUSbV6/view"
    },
    {
      "course": "Responsive Web Design",
      "instructor": "Chris Cooper",
      "provider": "FreeCodeCamp",
      "duration": "20 hours",
      "link": "https://www.freecodecamp.org/certification/charan11/responsive-web-design"
    },
    {
      "course": "The Joy Of Computing using Python",
      "instructor": " Prof. Sudarshan Iyengar",
      "provider": "NPTEL",
      "duration": "12 weeks",
      "link": "https://onlinecourses.nptel.ac.in/noc24_cs57/preview"
    },
    {
      "course": "Computer Networks and Internet Protocol",
      "instructor": "Prof. Soumya Kanti Ghosh",
      "provider": "NPTEL",
      "duration": "12 weeks",
      "link": "https://onlinecourses.nptel.ac.in/noc24_cs57/preview"
    },
    {
      "course": "Digital System Design",
      "instructor": "Prof. Neeraj Goel",
      "provider": "NPTEL",
      "duration": "12 weeks",
      "link": "https://onlinecourses.nptel.ac.in/noc24_cs57/preview"
    },
  ]

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  nextSlide() {
    this.slider.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }

  prevSlide() {
    this.slider.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }
}

