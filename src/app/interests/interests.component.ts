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
  
}
