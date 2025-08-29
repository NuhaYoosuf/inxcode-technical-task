# React + Tailwind Single-Page Application

A modern, responsive single-page application built with React and Tailwind CSS, featuring a purple color scheme based on #6C4CF5.

## Features

- **Responsive Design**: Mobile-first layout that adapts to all screen sizes
- **Modern UI**: Clean, professional design with purple accent colors
- **Complete Sections**:
  - Header with logo and navigation
  - Hero section with headline and CTA
  - About section with three core values
  - Services section with six service cards
  - Portfolio grid with four projects
  - Contact form with validation
  - Footer with copyright and social icons
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Active navigation highlighting
  - Form validation with user feedback
  - Hover effects on cards and buttons
- **Accessibility**: Semantic HTML, ARIA attributes, and keyboard navigation

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-tailwind-spa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

```
src/
  ├── components/
  │   ├── Header.js
  │   ├── Hero.js
  │   ├── About.js
  │   ├── Services.js
  │   ├── Portfolio.js
  │   ├── Contact.js
  │   └── Footer.js
  ├── data/
  │   ├── services.json
  │   └── portfolio.json
  ├── App.js
  ├── index.js
  └── index.css
```

## Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Technologies Used

- React 18
- Tailwind CSS
- React Icons
- ESLint & Prettier for code formatting

## Browser Support

This application supports all modern browsers including:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

