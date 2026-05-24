import { Project } from './project.model';

export const projects: Project[] = [
  {
    name: 'Socratic-OT - Multimodal AI Tutoring System',
    description: 'Python, FastAPI, Retrieval-Augmented Generation (RAG), ChromaDB, LangChain, Groq Llama 3.1, Gemini Flash, SBERT',
    detailedDescription: [
      'Developed a multimodal AI tutoring platform for Occupational Therapy students using Retrieval-Augmented Generation (RAG) grounded on OpenStax Anatomy & Physiology content with over 8,500 indexed knowledge chunks.',
      'Designed a three-agent Socratic tutoring architecture (Analyzer, Tutor, Reveal) that guides students through reasoning-based learning while preventing direct-answer leakage during early interactions.',
      'Built an image-based anatomical tutoring pipeline using Gemini Vision models, structured metadata matching, and vector retrieval to analyze and tutor students on anatomical diagrams with 81% structure recall accuracy.',
      'Implemented session-based conversational memory, personalized tutoring workflows, and cross-session mistake tracking to provide adaptive learning experiences and targeted revision guidance.'
    ],
    link: 'https://ot-tutor-ecme.onrender.com/chat',
    logo: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAiZAAZAA0'
  },
  {
    name: 'NoteFluxAI - Intelligent Workflow System',
    description: 'Angular, Python, Django, TypeScript, Tailwind CSS, PostgreSQL',
    detailedDescription: [
      'Developed an AI-integrated note-taking system with task and project management, enabling users to organize their daily activities efficiently with tagging and grouping features.',
      'Implemented a chat interface with web sockets, allowing seamless interaction with AI that has access to user-specific data for personalized assistance.',
      'Created an alert system for task deadlines and a dynamic dashboard offering graphical insights into task progress.'
    ],
    link: 'https://notefluxai.vercel.app',
    logo: 'https://img.icons8.com/?size=100&id=36387&format=png&color=000000'
  },
  {
    name: 'Retrieval-Augmented Text Classification',
    description: 'Python, PyTorch, Transformers, ChromaDB, SBERT, GloVe, Deep Learning, NLP',
    detailedDescription: [
      'Developed a retrieval-augmented text classification pipeline for the AG News dataset by integrating semantic retrieval with Transformer-based neural architectures.',
      'Built a scalable semantic retrieval system using ChromaDB and Sentence-BERT embeddings over a 120,000-document knowledge base, achieving 97.75% retrieval Accuracy@5.',
      'Implemented multiple retrieval-augmented classification architectures including Text-Concat RAC, Retrieval Fusion Transformer, and a Cross-Attention RAC model with probability interpolation.'
    ],
    link: '',
    logo: 'https://img.icons8.com/?size=100&id=jH4BpkMnRrU5&format=png&color=000000'
  },
  {
    name: 'Smart Video Surveillance Using YOLO Algorithm and Open CV',
    description: 'Deep Learning, Neural Networks, Python',
    detailedDescription: [
      'Developed a real-time video surveillance system implementing object detection with 20 FPS processing rate capable of identifying and tracking abandoned bags in public spaces.',
      'Designed and integrated a multi-modal alert system combining SMS (Twilio API), email (SMTP), and buzzer notifications, enhancing operational awareness and response efficiency.',
      'Created a web-based surveillance dashboard using Flask, HTML5, and Bootstrap, featuring real-time video streaming and alert management.'
    ],
    link: 'https://github.com/sricharanreddy11/abandoned-object-detection',
    logo: 'https://img.icons8.com/?size=100&id=12592&format=png&color=000000'
  },
  {
    name: 'Share&Sustain - Food Waste Management',
    description: 'Django, Python, HTML, CSS, Tailwind CSS, MySQL',
    detailedDescription: [
      'Developed a comprehensive food waste management website dedicated to fostering a sustainable and community-driven approach towards minimizing food waste.',
      'Built a back-end server using Django Model-View architecture, reducing deployment time by 40% and ensuring consistent and reliable releases.',
      'Implemented a real-time chat feature using WebSocket and Socket.io, enhancing user engagement and reducing response time by 20%.'
    ],
    link: 'https://share-and-sustain.onrender.com',
    logo: 'https://img.icons8.com/?size=100&id=37o3DqV429ra&format=png&color=000000'
  },
  {
    name: 'inConnector',
    description: 'JavaScript, HTML, CSS, Chrome APIs',
    detailedDescription: [
      'Developed a chrome extension to connect with people on LinkedIn.',
      'Implemented a feature to search for jobs on LinkedIn.',
      'Used JavaScript and HTML to implement the extension.'
    ],
    link: 'https://github.com/sricharanreddy11/inConnector',
    logo: 'https://img.icons8.com/?size=100&id=39854&format=png&color=000000'
  }
];
