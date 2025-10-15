# Dr. Arthur M. Langer - Professional Website

This is the professional website for Dr. Arthur M. Langer, Associate Vice Provost and Professor of Practice at Northeastern University.

## About

Dr. Arthur M. Langer is a distinguished academic, author, speaker, consultant, and social entrepreneur. This website showcases his work across multiple domains including:

- **Professor**: Positions at Northeastern University and Columbia University
- **Author**: Published books on technology management, software architecture, and organizational learning
- **Speaker**: Presentations on technology management, workforce development, and adult learning
- **Consultant**: Technology and management consulting services
- **Social Entrepreneur**: Founder of Workforce Opportunity Services (WOS)

## Technology Stack

- **React**: Frontend framework
- **Create React App**: Project scaffolding
- **CSS3**: Styling and responsive design
- **React Hooks**: State management

## Project Structure

```
langer-website/
├── public/               # Static assets
│   ├── header_image.png
│   ├── sitelogo.png
│   ├── teacher.jpeg
│   ├── art_speaker.jpg
│   ├── art_nutanix.png
│   ├── WOS_art.jpg
│   └── arthur_consultant.jpg
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   ├── Carousel.js
│   │   └── pages/
│   │       ├── HomePage.js
│   │       ├── ProfessorPage.js
│   │       ├── AuthorPage.js
│   │       ├── SpeakerPage.js
│   │       ├── ConsultantPage.js
│   │       ├── SocialEntrepreneurPage.js
│   │       └── PrivacyPolicyPage.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Available Scripts

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm test`

Launches the test runner in the interactive watch mode.

## Deployment

To deploy this application:

1. Run `npm run build` to create an optimized production build
2. Deploy the contents of the `build` folder to your web server
3. Ensure your web server is configured to serve the index.html for all routes (for client-side routing)

### Deployment Options

- **Netlify**: Drag and drop the build folder or connect your Git repository
- **Vercel**: Connect your Git repository for automatic deployments
- **GitHub Pages**: Use the gh-pages package to deploy
- **AWS S3 + CloudFront**: Host static files on S3 with CDN
- **Traditional Web Hosting**: Upload build folder to your hosting provider

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Auto-sliding Carousel**: Featured content on the home page
- **Clean Navigation**: Easy access to all sections
- **Professional Layout**: Modern design with consistent styling
- **Optimized Images**: All images properly sized and optimized
- **SEO Friendly**: Proper meta tags and semantic HTML

## Development

This project was built with React and follows best practices for component organization and code structure.

### Component Architecture

- **Functional Components**: All components use React hooks
- **Client-side Routing**: State-based navigation without page refreshes
- **Modular CSS**: Organized styling with component-specific classes
- **Responsive Grid Layouts**: CSS Grid and Flexbox for modern layouts

## Browser Support

This website supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Dr. Arthur M. Langer. All rights reserved.

## Contact

For inquiries, please visit the website or contact Dr. Langer through the provided channels.
