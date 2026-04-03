import img1_1 from '../assets/img1_1.png';
import img1_2 from '../assets/img1_2.png';
import img1_3 from '../assets/img1_3.png';
import img2_1 from '../assets/img2_1.png';
import img2_2 from '../assets/img2_2.png';
import img2_3 from '../assets/img2_3.png';
import img from '../assets/img.jpg';
import img1 from '../assets/image.jpg';

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
    year: '2025',
    status: 'Completed',
    color: 'from-yellow-400/20 to-yellow-600/20',

    liveUrl: '/',
    githubUrl: 'https://github.com/srinidhi-2005',

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
    teamSize: 7,
    duration: "4 months",

    timeline: {
      start: "April 2025",
      end: "July 2025"
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

    thumbnail: [img],
    images: [img, img1, img],

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
  }
];