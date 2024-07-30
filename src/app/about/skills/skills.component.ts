import { Component } from '@angular/core';
import { SkillComponent } from "./skill/skill.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillComponent, NgIf, NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  detailedView = false;
  selectedTab : 'technologies' | 'languages' | 'databases' = 'technologies';

  languages = [
    {
      "logo": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      "alt": "Python"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      "alt": "Javascript"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000",
      "alt": "Typescript"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
      "alt": "C++"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      "alt": "HTML"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
      "alt": "CSS"
    },
  ]

technologies = [
    {
      "logo": "https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000",
      "alt": "Django"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=j9DnICNnlhGk&format=png&color=000000",
      "alt": "Angular"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
      "alt": "React JS"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      "alt": "Node JS"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      "alt": "Tailwind CSS"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
      "alt": "Bootstrap"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=TtXEs5SeYLG8&format=png&color=000000",
      "alt": "Flask"
    },
    {
      "logo": "https://storage.caktusgroup.com/media/blog-images/drf-logo2.png",
      "alt": "Django REST Framework"
    },
  ]

databases = [
    {
      "logo": "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
      "alt": "MySQL"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=LwQEs9KnDgIo&format=png&color=000000",
      "alt": "PostgreSQL"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      "alt": "MongoDB"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=VMRAbKfEzssG&format=png&color=000000",
      "alt": "SQLite"
    },
  ]

  onToggleView(){
      this.detailedView = !this.detailedView
  }
}
