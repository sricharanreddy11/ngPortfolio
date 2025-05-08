import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Interest } from './interests.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {

  constructor(private sanitizer: DomSanitizer){}
  interests: Interest[] = [
    {
      title: 'Natural Language Processing',
      description: 'Working with language models and text processing to create more natural human-computer interactions.',
      icon: this.sanitize(`<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-language-katakana"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293" /><path d="M8 8c0 1.5 .5 3 -2 5" /><path d="M12 20l4 -9l4 9" /><path d="M19.1 18h-6.2" /></svg>`),
      category: 'AI'
    },
    {
      title: 'Web Developement',
      description: 'Designing and building responsive, dynamic web applications using modern front-end and back-end technologies.',
      icon: this.sanitize(`<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" /><path d="M7 20h4" /><path d="M9 16v4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>`),
      category: 'AI'
    },
    {
      title: 'Agentic AI',
      description: 'Exploring the development of autonomous AI systems that can make decisions and take actions to achieve specific goals.',
      icon: this.sanitize(`<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tournament"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-3" /><path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2" /><path d="M14 10h4" /></svg>`),
      category: 'AI'
    },
    {
      title: 'Retrieval-Augmented Generation',
      description: 'Implementing RAG systems to enhance AI responses with accurate, real-time data from external sources.',
      icon: this.sanitize(`<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-exchange"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" /><path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" /></svg>`),
      category: 'AI'
    },
    {
      title: 'Machine Learning',
      description: 'Building and training models to make predictions and decisions based on data patterns.',
      icon: this.sanitize(`<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-robot"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg>`),
      category: 'AI'
    },
  ];

  sanitize(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
