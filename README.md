# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase my work, skills, and professional journey. This portfolio serves as a comprehensive platform to demonstrate my capabilities as a developer and connect with potential employers or clients.

## 🌟 Key Features

### 1. Interactive Landing Page

- Engaging hero section with animated elements
- Smooth scroll navigation
- Responsive design that adapts to all screen sizes
- Modern UI with attention to detail

### 2. About Me Section

- Professional background and experience
- Personal journey and motivation
- Professional headshot and introduction
- Interactive timeline of career progression

### 3. Skills Showcase

- Technical skills with proficiency indicators
- Soft skills and professional competencies
- Interactive skill cards with detailed descriptions
- Categorized skill sets for easy navigation

### 4. Project Portfolio

- Detailed project showcase with high-quality images
- Project descriptions and key features
- Technologies used in each project
- Live demo links and GitHub repositories
- Project filtering and search capabilities

### 5. Interactive World Map

- Visual representation of global reach
- Interactive country selection
- Geographic distribution of experience
- Animated transitions and tooltips

### 6. Contact Section

- Professional contact form with EmailJS integration
- Form validation and error handling
- Success/error notifications
- Social media integration
- Direct email option

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
- Custom animations and transitions

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
git clone [your-repository-url]
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

## 📝 License

This project is open source and available under the MIT License. See the LICENSE file for details.

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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
