# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase my work, skills, and professional journey. This portfolio serves as a comprehensive platform to demonstrate my capabilities as a developer and connect with potential employers or clients.

## 🌟 Key Features

### 1. Interactive Landing Page

- Engaging hero section with animated elements
- Smooth scroll navigation
- Responsive design that adapts to all screen sizes
- Modern UI with attention to detail

### 2. About Me Section

- Professional headshot and introduction
- Interactive timeline of career progression

### 3. Skills Showcase

- Technical skills with proficiency indicators
- Soft skills and professional competencies
- Categorized skill sets for easy navigation

### 4. Project Portfolio

- Detailed project showcase with high-quality images
- Project descriptions and key features
- Technologies used in each project
- Live demo links and GitHub repositories

### 5. Interactive World Map

- Visual representation of global reach
- Interactive country selection
- Animated transitions and tooltips

### 6. Contact Section

- Professional contact form with EmailJS integration
- Form validation and error handling
- Social media integration

## 🛠️ Technology Stack

### Frontend Framework

- React.js 18.2.0
- React Router DOM 7.6.2 for navigation
- React Icons 5.5.0 for iconography
- Lucide React 0.513.0 for additional icons

### Styling and UI

- Tailwind CSS 3.4.17 for utility-first styling
- PostCSS 8.5.4 for CSS processing
- Autoprefixer 10.4.21 for cross-browser compatibility

### Interactive Features

- React Simple Maps 3.0.0 for world map visualization
- React Select 5.10.1 for enhanced form inputs
- EmailJS 4.4.1 for contact form functionality
- Countries List 3.1.1 for geographic data

### Development Tools

- Create React App for project scaffolding
- ESLint for code quality
- Jest and React Testing Library for testing
- Web Vitals for performance monitoring

## 📦 Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/srinidhi-2005/my-portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🏗️ Building for Production

1. Create a production build:

```bash
npm run build
```

2. The build files will be generated in the `build` directory
3. Deploy the contents of the `build` directory to your hosting service

## 📁 Project Structure

```
src/
├── assets/         # Static assets like images and fonts
├── components/     # Reusable React components
│   ├── Layout.js
│   ├── Map.js
│   ├── Navbar.js
│   ├── ProjectDetails.js
│   └── Tooltip.js
├── pages/          # Main page components
│   ├── About.js
│   ├── Contact.js
│   ├── LandingPage.js
│   ├── Projects.js
│   ├── Skills.js
│   └── Welcome.js
├── data/          # Static data and configurations
├── App.js         # Main application component
└── index.js       # Application entry point
```

## 🎨 Customization

### Styling

- Modify `tailwind.config.js` for theme customization
- Update color schemes and typography in the configuration
- Add custom animations in the CSS files

### Content

- Update project information in the data files
- Modify the About section with your personal information
- Customize the Skills section with your expertise
- Add or remove sections as needed

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 👤 Contact and Support

Feel free to reach out through:

- Portfolio contact form
- Email: [marthasrinidhi16@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/srinidhi-martha-426106301/]
- GitHub: [https://github.com/srinidhi-2005]

## 🙏 Acknowledgments

- Create React App team for the project template
- All open-source libraries and tools used in this project
- Design inspiration from various portfolio websites
