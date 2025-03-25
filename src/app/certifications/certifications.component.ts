import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgFor],
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
      "link": "https://drive.google.com/file/d/1L9-ZcUuXNYCVvN5vUjLoSgDsxNpUSbV6/view",
      "logo": "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-700x394.png"
    },
    {
      "course": "Python and Django Full Stack Web Developer Bootcamp",
      "instructor": "Jose Portilla",
      "provider": "Udemy",
      "duration": "32 hours",
      "link": "https://drive.google.com/file/d/1L9-ZcUuXNYCVvN5vUjLoSgDsxNpUSbV6/view",
      "logo": "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-700x394.png"
    },
    {
      "course": "Responsive Web Designn using HTML and CSS",
      "instructor": "Chris Cooper",
      "provider": "FreeCodeCamp",
      "duration": "20 hours",
      "link": "https://www.freecodecamp.org/certification/charan11/responsive-web-design",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png"
    },
    {
      "course": "The Joy Of Computing using Python",
      "instructor": " Prof. Sudarshan Iyengar",
      "provider": "NPTEL",
      "duration": "12 weeks",
      "link": "https://onlinecourses.nptel.ac.in/noc24_cs57/preview",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuZIE0sBW1TumDoQRDx0tahiqdv7y7DUzKg&s"
    },
    {
      "course": "Computer Networks and Internet Protocol",
      "instructor": "Prof. Soumya Kanti Ghosh",
      "provider": "NPTEL",
      "duration": "12 weeks",
      "link": "https://onlinecourses.nptel.ac.in/noc24_cs57/preview",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuZIE0sBW1TumDoQRDx0tahiqdv7y7DUzKg&s"
    }
  ]

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  nextSlide() {
    this.slider.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

  prevSlide() {
    this.slider.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }
}

