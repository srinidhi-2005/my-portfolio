import img from '../assets/image.jpg';
import img1 from '../assets/img.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'CNN - Based Lake Water Quality Estimation Using Satellite Images',
    subtitle: 'Advanced AI system for environmental monitoring',
    description: 'A comprehensive machine learning solution that analyzes satellite imagery to classify lake water quality as "Good" or "Poor". Uses convolutional neural networks with Landsat and Sentinel-2 satellite data to provide cost-effective and scalable environmental monitoring for water resource management.',
    images: [img, img, img1],
    technologies: ['React JS', 'Tailwind CSS', 'Node + Express JS', 'MongoDB', 'Flask', 'CNNs', 'PyTorch'],
    category: 'AI/ML',
    year: '2024',
    status: 'Completed',
    color: 'from-yellow-400/20 to-orange-500/20',
    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005',
    type: 'Team',
    features: [
      'Automated water quality detection without manual sampling',
      'CNN model with 90%+ accuracy for water condition predictions',
      'Satellite image analysis using Landsat & Sentinel-2 data',
      'Interactive user interface with real-time predictions',
      'Multi-page navigation and interactive dashboards',
      'Historical data visualization',
      'Image upload functionality for real-time analysis'
    ],
    challenges: [
      'Processing and preprocessing satellite image datasets',
      'Training CNN models for accurate binary classification',
      'Integrating deep learning models with web interface',
      'Ensuring seamless frontend-backend communication'
    ],
    futureEnhancements: [
      'Multi-class water quality classification',
      'Integration with more satellite data sources',
      'Mobile application for field use',
      'Advanced preprocessing techniques for better accuracy'
    ],
    methodology: "Agile development with weekly sprints, user testing, and iterative design",
    results: {
      metrics: "Over 95% accuracy in water quality classification (Good/Poor)",
      impact: "Enables efficient monitoring for researchers and environmental authorities"
    },
    myRole: "Frontend developer and ML engineer",
    teamSize: 6,
    duration: "4 months",
    timeline: {
      start: "Oct 2024",
      end: "Jan 2025"
    },
    lessonsLearned: [
      "Importance of accurate satellite data preprocessing",
      "Effective frontend-backend integration for AI applications",
      "User experience design for technical applications",
      "Team collaboration in interdisciplinary projects"
    ]
  },
  {
    id: 2,
    title: 'Digitron - Handwritten Digit Recognition System Using Deep Learning',
    subtitle: 'High-accuracy digit recognition system',
    description: 'A deep learning model developed from scratch to recognize handwritten digits from the MNIST dataset. Built without using any prebuilt libraries or frameworks, showcasing a ground-up implementation of all neural network components including forward propagation, backpropagation, and gradient descent optimization.',
    images: [img, img1, img],
    technologies: ['Python', 'Neural Networks', 'MNIST Dataset', 'PyTorch'],
    category: 'AI/ML',
    year: '2025',
    status: 'Completed',
    color: 'from-yellow-400/20 to-lime-500/20',
    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005',
    type: 'Individual',
    features: [
      'Built-from-scratch neural network with no external ML libraries',
      'Manual MNIST data handling with binary file parsing',
      'Fully connected architecture with custom layers',
      'Custom implementation of activation functions',
      'Manual backpropagation and gradient descent optimization',
      'Cross-entropy loss function implementation',
      'High accuracy digit classification using only Python and NumPy'
    ],
    challenges: [
      'Implementing neural network components from scratch without frameworks',
      'Manual implementation of backpropagation algorithm',
      'Parsing and preprocessing MNIST binary file format',
      'Optimizing gradient descent for efficient training',
      'Debugging custom neural network architecture',
      'Achieving reliable performance without prebuilt optimizations'
    ],
    futureEnhancements: [
      'Implementation of convolutional layers from scratch',
      'Optimization algorithms implementation',
      'Visualization tools for training metrics',
      'Performance comparison with framework implementations'
    ],
    methodology: "Ground-up development approach focusing on fundamental understanding of neural network mechanics",
    results: {
      metrics: "Achieved reliable performance in digit classification using only raw Python and NumPy implementation",
      impact: "Demonstrates core AI/ML concepts built independently, improving foundational understanding of deep learning and model training"
    },
    myRole: "ML engineer",
    teamSize: 1,
    duration: "2 month",
    timeline: {
      start: "May 2025",
      end: "Jun 2025"
    },
    lessonsLearned: [
      "Deep understanding of neural network internals and mathematics",
      "Importance of proper weight initialization and learning rates",
      "Challenges and complexities of implementing backpropagation manually",
      "Value of understanding fundamentals before using high-level frameworks",
      "Optimization techniques and their impact on training efficiency",
      "Data preprocessing importance in machine learning pipelines"
    ]
  },
  {
    id: 3,
    title: 'FindIt - Online Campus Lost & Found Portal',
    subtitle: 'Smart campus solution for lost item recovery',
    description: 'An innovative web-based portal developed to streamline the lost and found process within college campuses. The platform leverages technology to bridge the gap between lost items and their rightful owners, promoting trust, transparency, and ease of access with an intuitive UI and robust backend.',
    images: [img, img1, img],
    technologies: ['React JS', 'Tailwind CSS', 'Node JS', 'Express JS', 'MongoDB'],
    category: 'Full Stack',
    year: '2025',
    status: 'In Progress',
    color: 'from-yellow-400/20 to-amber-500/20',
    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005',
    type: 'Individual',
    features: [
      'Lost & Found item reporting with images and descriptions',
      'Smart matching system with filters and search algorithms',
      'Fully responsive design with smooth animations',
      'Dark/light mode support',
      'Secure admin panel for item claim verification',
      'Real-time updates and dynamic components',
      'Parallax effects for enhanced user experience',
      'JWT-based authentication with role-based access',
      'Cloud-based image storage and management'
    ],
    challenges: [
      'Implementing accurate item matching algorithms',
      'Creating intuitive and responsive user interface',
      'Ensuring secure authentication and authorization',
      'Managing image uploads and cloud storage integration',
      'Implementing real-time updates and notifications',
      'Designing efficient admin verification workflow'
    ],
    futureEnhancements: [
      'AI-powered image recognition for better matching',
      'Mobile app development for easier access',
      'Push notifications for instant updates',
      'Integration with campus security systems',
      'Multi-campus support',
      'Advanced analytics and reporting dashboard'
    ],
    methodology: "Individual development with iterative design, user feedback integration, and continuous improvement",
    results: {
      metrics: "Fully responsive web application with smooth animations and efficient item management",
      impact: "Digitizes campus lost and found process, fostering collaborative environment and enhancing trust, accountability, and convenience across the institution"
    },
    teamSize: 1,
    duration: "Ongoing (2+ months)",
    timeline: {
      start: "April 2024",
      end: "Present"
    },
    lessonsLearned: [
      "Importance of responsive design and user experience",
      "Effective state management in React applications",
      "Implementing secure authentication and authorization",
      "Cloud storage integration and image management",
      "Building efficient search and filtering algorithms",
      "Creating admin interfaces for content management"
    ]
  },
  {
    id: 4,
    title: 'Transformer Based Architecture for Legal Question Answering and Summarization',
    subtitle: 'AI-powered legal document processing system',
    description: 'A cutting-edge GenAI project that leverages Transformer-based Deep Learning techniques to simplify complex legal texts and answer user queries from legal documents. Built using pre-trained models with PyTorch, the system processes lengthy legal judgments to provide coherent summaries and precise answers, making legal information more accessible.',
    images: [img, img1, img],
    technologies: ['React JS', 'Tailwind CSS', 'Node + Express JS', 'MongoDB', 'Flask', 'GenAI', 'Transformers'],
    category: 'AI/ML',
    year: '2025',
    status: 'In Progress',
    color: 'from-yellow-400/20 to-yellow-600/20',
    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005',
    type: 'Team',
    features: [
      'Dual-model Transformer architecture for summarization and Q&A',
      'End-to-end training with custom attention mechanisms',
      'Legal domain expertise with Indian court judgments dataset',
      'Text extraction from real legal documents',
      'Voice-based query support with TTS integration',
      'Custom tokenizer and positional encoding',
      'Real-time legal document processing',
      'Context-aware response generation for legal queries'
    ],
    challenges: [
      'Training models on complex legal domain data',
      'Handling lengthy legal documents and maintaining context',
      'Extracting and preprocessing text from legal Text files/PDFs',
      'Implementing custom attention mechanisms manually',
      'Ensuring accuracy in legal interpretations and summaries'
    ],
    futureEnhancements: [
      'Advanced voice interaction capabilities',
      'Multi-language support for legal documents',
      'Integration with legal databases and case law',
      'Real-time legal updates and notifications',
      'Mobile app for legal professionals'
    ],
    methodology: "Agile development with focus on custom model architecture, iterative training, and legal domain validation",
    results: {
      metrics: "Dual-model architecture successfully handling both summarization and question answering tasks with custom-built transformers",
      impact: "Addresses increasing complexity of legal data by offering scalable AI solutions, empowering lawyers, researchers, and citizens to navigate legal documents efficiently"
    },
    myRole: "Full-stack developer",
    teamSize: 7,
    duration: "Ongoing (2+ months)",
    timeline: {
      start: "April 2024",
      end: "Present"
    },
    lessonsLearned: [
      "Deep understanding of transformer architecture internals",
      "Importance of domain-specific data in legal NLP",
      "Challenges of building ML models",
      "Effective preprocessing techniques for legal documents",
      "Integration of AI models with web applications",
      "Team collaboration on complex AI projects"
    ]
  }
];