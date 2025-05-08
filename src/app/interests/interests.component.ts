import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Interest } from './interests.model';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interests: Interest[] = [
    {
      title: 'Agentic AI',
      description: 'Exploring the development of autonomous AI systems that can make decisions and take actions to achieve specific goals.',
      icon: '🤖',
      category: 'AI'
    },
    {
      title: 'Natural Language Processing',
      description: 'Working with language models and text processing to create more natural human-computer interactions.',
      icon: '💬',
      category: 'AI'
    },
    {
      title: 'Machine Learning',
      description: 'Building and training models to make predictions and decisions based on data patterns.',
      icon: '🧠',
      category: 'AI'
    }
  ];
}
