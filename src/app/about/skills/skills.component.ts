import { Component } from '@angular/core';
import { SkillComponent } from "./skill/skill.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillComponent, NgClass],
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
      "logo": "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAiZAAZAA0",
      "alt": "FastAPI"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=jH4BpkMnRrU5&format=png&color=000000",
      "alt": "Pytorch"
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
      "logo": "https://www.django-rest-framework.org/img/logo-dark.png#only-dark",
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
    {
      "logo": "https://dt-cdn.net/hub/chroma.d840f629-icon.png",
      "alt": "ChromaDB"
    },
  ]

  onToggleView(){
      this.detailedView = !this.detailedView
  }
}
