import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  activeTab: string = 'volunteer';

  achievements: string[] = [
    "Awarded an Honours Degree in System on Chip Design (2024), recognizing my expertise and dedication to advanced hardware and software integration.",
    "Received Highest GPA Merit Award for 2 consecutive academic years(2020-21 & 2021-22), reflecting unwavering commitment to academic excellence and high performance.",
    "Achieved Second Rank in Intermediate Public Examinations (2020), demonstrating academic excellence and a strong foundation in core subjects.",
  ];

  organisations: { name: string, logo: string, description: string, link: string }[] = [
    {
      name: "Street Cause Vasavi",
      logo: "https://hya.streetcause.org/images/sc_files/logo.png",
      description: "Served as Logistics Head of the organization that aims is to give a new lease of life to street children, elderly people and incapacitated beggars by admitting them into orphanages and old age homes and also by teaching those means to earn their living.",
      link: "https://www.streetcause.org/",
    },
    {
      name: "Newton's Apple",
      logo: "https://media.licdn.com/dms/image/D4E0BAQHCgeuuC1TUmA/company-logo_200_200/0/1665588131390?e=2147483647&v=beta&t=wr7Ar0z-bVD3pIRiZfMZDDUIprDyEZ1P1NH3N9JUBDE",
      description: "Worked as Content Developer at Newton's Apple, monthly magazine run by students of E.C.E. at Vasavi College of Engineering",
      link: "https://vce-newtonsapple.github.io/magazine/media/logo_transparent.PNG",
    },
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
