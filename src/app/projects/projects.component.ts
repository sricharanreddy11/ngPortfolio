import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects : Project[] = [
    {
      "name": "NoteFluxAI - Intelligent Workflow System",
      "description": "Angular, Python, Django, TypeScript, Tailwind CSS, PostgreSQL",
      "detailedDescription": [
        "Developed an AI-integrated note-taking system with task and project management, enabling users to organize their daily activities efficiently with tagging and grouping features.",
        "Implemented a chat interface with web sockets, allowing seamless interaction with AI that has access to user-specific data for personalized assistance.",
        "Created an alert system for task deadlines and a dynamic dashboard offering graphical insights into task progress."
      ],
      "link": "https://notefluxai.vercel.app",
      "logo": "https://img.icons8.com/?size=100&id=36387&format=png&color=000000"
    },
    {
      "name": "Smart Video Surveillance Using YOLO Algorithm and Open CV",
      "description": "Deep Learning, Neural Networks, Python",
      "detailedDescription": [
        "Developed a real-time video surveillance system implementing object detection with 20 FPS processing rate capable of identifying and tracking abandoned bags in public spaces.",
        "Designed and integrated a multi-modal alert system combining SMS (Twilio API), email (SMTP), and buzzer notifications, with automated triggers.",
        "Created a web-based surveillance dashboard using Flask, HTML5, and Bootstrap, featuring real-time video streaming, and a user interface for monitoring and managing security alerts."
      ],
      "link": "https://github.com/sricharanreddy11/abandoned-object-detection",
      "logo": "https://img.icons8.com/?size=100&id=12592&format=png&color=000000"
    },
    {
      "name": "Share&Sustain - Food Waste Management",
      "description": "Django, Python, HTML, CSS, Tailwind CSS, MySQL",
      "detailedDescription": [
        "Developed a comprehensive food waste management website dedicated to fostering a sustainable and community-driven approach towards minimizing food waste.",
        "Built a back-end server using Django Model-View architecture, reducing deployment time by 40% and ensuring consistent and reliable releases.",
        "Implemented a real-time chat feature using WebSocket and Socket.io, enhancing user engagement and reducing response time by 20%."
      ],
      "link": "https://share-and-sustain.onrender.com",
      "logo": "https://img.icons8.com/?size=100&id=37o3DqV429ra&format=png&color=000000"
    },
    {
      "name": "inConnector",
      "description": "Javascipt, HTML, CSS, Chrome APIs",
      "detailedDescription": ["Developed a chrome extension to connect with people on LinkedIn",
        "Implemented a feature to search for jobs on LinkedIn",
        "Used JavaScript and HTML to implement the extension"],
      "link": "https://github.com/sricharanreddy11/inConnector",
      "logo": "https://img.icons8.com/?size=100&id=39854&format=png&color=000000"
    }
  ]
    expandedIndex: number | null = null;

  toggleProject(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
