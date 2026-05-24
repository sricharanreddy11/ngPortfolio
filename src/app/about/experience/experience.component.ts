import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experience = [
    {
      "role": "Software Developer",
      "organisation": "Adjoint Technologies",
      "duration": "Jan 2024 - Jul 2025",
      "description": [
        "Developed microservice-based architectures, leveraging AWS and message queuing systems to ensure seamless interservice communication and scalability.",
        "Implemented robust email integration systems using IMAP and SMTP protocols to schedule emails efficiently, enhancing the effectiveness of cold emailing and marketing campaigns.",
        "Integrated AI capabilities into the product through Retrieval-Augmented Generation (RAG), enabling advanced data retrieval and improved user experiences with large language models.",
        "Developed and maintained a billing platform by integrating Stripe and Razorpay payment gateways, enabling secure payment processing, subscription management, and automated billing cycles."
    ]
    },
  ]
}
