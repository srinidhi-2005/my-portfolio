import img1_1 from '../assets/img1_1.png';
import img1_2 from '../assets/img1_2.png';
import img1_3 from '../assets/img1_3.png';
import img2_1 from '../assets/img2_1.png';
import img2_2 from '../assets/img2_2.png';
import img2_3 from '../assets/img2_3.png';
import img3_1 from '../assets/img3_1.png';
import img3_2 from '../assets/img3_2.png';
import img3_3 from '../assets/img3_3.png';
import img4_1 from '../assets/img4_1.png';
import img4_2 from '../assets/img4_2.png';
import img4_3 from '../assets/img4_3.png';

export const projectsData = [
  {
    id: 1,
    title: 'Transformer-based Legal Document Summarization for Indian Court Judgments',
    subtitle: 'Deep Learning based NLP system for legal text summarization',
    
    description: 'Developed a Transformer-based NLP system using BART and PyTorch to generate abstractive summaries of Indian legal judgments. The system processes long legal documents using efficient tokenization and chunking techniques to produce coherent and accurate summaries, improving accessibility of complex legal texts.',

    thumbnail: [img1_1],
    images: [img1_1, img1_2, img1_3],

    technologies: ['Python', 'PyTorch', 'Transformers', 'NLP'],

    category: 'AI/ML',
    year: '2026',
    status: 'Completed',
    color: 'from-yellow-400/20 to-yellow-600/20',

    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005/text-summarizer',

    type: 'Team',

    features: [
      'Fine-tuned BART-based Transformer model for abstractive text summarization',
      'Handled long legal documents using tokenization and chunking (1024 tokens)',
      'Built NLP preprocessing pipeline for cleaning and structuring legal text data',
      'Achieved ROUGE-1: 0.477 and BERT F1: 0.845 on evaluation metrics',
      'Integrated model into a web-based interface for document summarization'
    ],

    challenges: [
      'Handling long and complex legal documents exceeding model input limits',
      'Maintaining context during text chunking and summarization',
      'Preprocessing noisy and unstructured legal text data',
      'Optimizing model performance for accurate summaries'
    ],

    futureEnhancements: [
      'Extend system for legal question answering',
      'Improve summarization quality with advanced transformer models',
      'Support multi-document summarization',
      'Add multilingual capabilities for legal texts'
    ],

    methodology: "Model fine-tuning using PyTorch, NLP preprocessing, and evaluation using ROUGE and BERT-based metrics",

    results: {
      metrics: "ROUGE-1: 0.477, BERT F1: 0.845",
      impact: "Improves accessibility of complex legal documents by generating concise and meaningful summaries"
    },

    myRole: "AI/ML Developer (Model Development & NLP Pipeline)",
    teamSize: 4,
    duration: "5 months",

    timeline: {
      start: "March 2026",
      end: "July 2026"
    },

    lessonsLearned: [
      "Understanding of transformer-based architectures for NLP tasks",
      "Importance of preprocessing in handling real-world text data",
      "Handling long sequence inputs in NLP models",
      "Evaluating NLP models using ROUGE and semantic metrics",
      "Experience in building end-to-end NLP pipelines"
    ]
  },
  {
    id: 2,
    title: 'CNN-based Lake Water Quality Estimation using Satellite Images',
    subtitle: 'Deep Learning system for environmental monitoring',

    description: 'Developed a Convolutional Neural Network (CNN) model using PyTorch to classify lake water quality from satellite imagery. The system processes remote sensing data and predicts water conditions, providing a scalable approach for environmental monitoring.',

    thumbnail: [img2_1],
    images: [img2_1, img2_2, img2_3],

    technologies: ['Python', 'PyTorch', 'CNN', 'MERN Stack'],

    category: 'AI/ML',
    year: '2025',
    status: 'Completed',
    color: 'from-yellow-400/20 to-orange-500/20',

    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005/Aqua-Monitor',

    type: 'Team',

    features: [
      'Designed and trained CNN model for binary classification of water quality',
      'Achieved 95% accuracy on satellite image dataset',
      'Performed data preprocessing and feature extraction on remote sensing data',
      'Optimized CNN architecture for improved classification performance',
      'Developed a web interface using MERN stack for visualization of model predictions'
    ],

    challenges: [
      'Preprocessing satellite image data for model training',
      'Handling variability in image quality and environmental conditions',
      'Optimizing CNN model for better generalization',
      'Integrating model outputs with web interface'
    ],

    futureEnhancements: [
      'Extend to multi-class water quality classification',
      'Incorporate additional satellite datasets for improved accuracy',
      'Enhance model performance with advanced architectures',
      'Deploy as a scalable monitoring system'
    ],

    methodology: "Data preprocessing, CNN model training using PyTorch, and performance evaluation using accuracy metrics",

    results: {
      metrics: "95% classification accuracy",
      impact: "Provides a scalable approach for monitoring lake water quality using satellite imagery"
    },

    myRole: "AI/ML Developer (CNN Model) & Frontend Integration",
    teamSize: 6,
    duration: "5 months",

    timeline: {
      start: "October 2024",
      end: "February 2025"
    },

    lessonsLearned: [
      "Understanding CNN architectures for image classification",
      "Importance of preprocessing in computer vision tasks",
      "Handling real-world satellite image datasets",
      "Integrating AI models with web applications",
      "Collaborating in team-based AI projects"
    ]
  },
  {
    id: 3,
    title: 'MNIST Handwritten Digit Recognition with Docker & CI/CD',
    subtitle: 'Deep Learning model with containerization and automation',

    description: 'Built a neural network model from scratch in Python to classify handwritten digits from the MNIST dataset. The project demonstrates core deep learning concepts along with containerization using Docker and automation through CI/CD pipelines.',

    thumbnail: [img3_1],
    images: [img3_1, img3_2, img3_3],

    technologies: ['Python', 'Neural Networks', 'NumPy', 'Docker', 'GitHub Actions (CI/CD)'],

    category: 'AI/ML',
    year: '2026',
    status: 'Completed',
    color: 'from-yellow-400/20 to-lime-500/20',

    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005/digitron',

    type: 'Individual',

    features: [
      'Built neural network model from scratch for handwritten digit classification',
      'Achieved 97.6% accuracy on MNIST dataset',
      'Implemented core concepts including forward propagation, backpropagation, and gradient descent',
      'Performed data preprocessing and model training pipeline',
      'Containerized the application using Docker for consistent execution',
      'Implemented CI/CD pipeline using GitHub Actions for automated testing and builds'
    ],

    challenges: [
      'Implementing neural network logic from scratch without high-level frameworks',
      'Optimizing training process for better accuracy and generalization',
      'Debugging model performance and convergence issues',
      'Setting up Docker environment and CI/CD workflow'
    ],

    futureEnhancements: [
      'Extend model using advanced architectures for improved performance',
      'Add visualization for training metrics and predictions',
      'Deploy as an interactive application for real-time predictions'
    ],

    methodology: "Implemented neural network from scratch, followed by containerization and CI/CD automation for reproducible workflows",

    results: {
      metrics: "97.6% accuracy on MNIST test dataset",
      impact: "Demonstrates strong understanding of deep learning fundamentals along with practical deployment skills"
    },

    myRole: "AI/ML Developer (Model Development & Deployment)",
    teamSize: 1,
    duration: "2 months",

    timeline: {
      start: "February 2026",
      end: "March 2026"
    },

    lessonsLearned: [
      "Strong understanding of neural network fundamentals",
      "Importance of training optimization and evaluation",
      "Hands-on experience with Docker and CI/CD pipelines",
      "Bridging machine learning development with deployment practices",
      "Debugging and improving model performance"
    ]
  },
  {
    id: 4,
    title: 'Palette & Pages — Book Management System',
    subtitle: 'Full-stack creative book management with React, Spring Boot & MySQL',

    description: 'Developed a full-stack book management application enabling users to add, update, delete and manage book records efficiently. Built RESTful APIs using Spring Boot with MySQL for persistent data storage and designed a responsive React.js frontend for seamless book exploration and management across creativity, photography, sketching, cooking and artistic inspiration.',

    thumbnail: [img4_1],
    images: [img4_1, img4_2, img4_3],

    technologies: ['React.js', 'Spring Boot', 'MySQL'],

    category: 'Full Stack',
    year: '2026',
    status: 'Completed',
    color: 'from-yellow-400/20 to-amber-600/20',

    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005/palette-pages-fullstack',

    type: 'Individual',

    features: [
      'Full CRUD book management — add, update, delete and view all books',
      'Search and filter books by title, author and price',
      'Optional image URL support with dynamic book cover previews',
      'RESTful Spring Boot APIs with Spring Data JPA and Hibernate',
      'Data validation and global exception handling on the backend',
      'Responsive card-based React.js UI with creative aesthetic and hover animations',
      'Secure database credentials via environment variable configuration'
    ],

    challenges: [
      'Designing clean RESTful API contracts for all CRUD and search operations',
      'Integrating React frontend with Spring Boot backend via Axios',
      'Implementing flexible search APIs across multiple book fields',
      'Building a responsive, visually cohesive UI for creative book browsing'
    ],

    futureEnhancements: [
      'User authentication',
      'Favorites / wishlist support',
      'Cloud image upload',
      'Pagination for large book collections',
      'Dark mode',
      'Production deployment'
    ],

    methodology: "Built backend CRUD and search REST APIs with Spring Boot and MySQL, then connected a React.js frontend for interactive book management and filtering",

    results: {
      metrics: "Complete CRUD + search API suite (title, author, price) with MySQL persistence",
      impact: "Provides a creative digital space to organize and manage books inspired by art, photography, cooking and visual storytelling"
    },

    myRole: "Full Stack Developer (React Frontend & Spring Boot Backend)",
    teamSize: 1,
    duration: "1 month",

    timeline: {
      start: "May 2026",
      end: "May 2026"
    },

    lessonsLearned: [
      "End-to-end full-stack development with React and Spring Boot",
      "Designing and consuming RESTful APIs for CRUD workflows",
      "MySQL integration with Spring Data JPA and Hibernate",
      "Handling validation and exceptions in backend services",
      "Building responsive, interactive UIs for data-driven applications"
    ]
  }
];