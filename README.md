# 🚀 StriveTech – React + Tailwind SPA

A modern, responsive **single-page application** built with **React** and **Tailwind CSS**, designed as a startup landing page with smooth navigation, modular components, and accessible design.

---

## 📌 Features

* **Responsive Design**: Mobile-first layout adapting to all screen sizes
* **Clean UI**: Minimal, professional, and purple-accented styling
* **Complete Sections**:

  * 🌐 **Header** – logo + navigation
  * 🎯 **Hero** – headline with call-to-action button
  * 💡 **About** – intro + 3 core values
  * 🛠️ **Services** – 3–6 cards rendered from JSON data
  * 📂 **Portfolio** – grid layout with 4–6 projects
  * ✉️ **Contact** – form with validation & user feedback
  * 📌 **Footer** – copyright + social icons
* **Interactivity**:

  * Smooth scrolling navigation
  * Active section highlighting in navbar
  * Hover animations on buttons & cards
  * Basic form validation
* **Accessibility**: Semantic HTML, alt attributes for images, and keyboard navigation support
* **Code Quality**: ESLint + Prettier for consistent formatting

---

## 🛠️ Getting Started

### ✅ Prerequisites

* [Node.js](https://nodejs.org/) (v14 or higher)
* npm or yarn

### ⚡ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NuhaYoosuf/inxcode-technical-task.git
   cd inxcode-technical-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
src/
  ├── components/        # Modular UI components
  │   ├── Header.js
  │   ├── Hero.js
  │   ├── About.js
  │   ├── Services.js
  │   ├── Portfolio.js
  │   ├── Contact.js
  │   └── Footer.js
  ├── data/              # Static JSON for services & portfolio
  │   ├── services.json
  │   └── portfolio.json
  ├── App.js             # Root component
  ├── index.js           # Entry point
  └── index.css          # Tailwind styles
```

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `build` folder, ready to deploy.

---

##  Live Demo

Check out the live version of the **SriveTech** website deployed via Netlify:  
https://strivetech1.netlify.app/

---

## 🧰 Tech Stack

* ⚛️ **React 18** – Component-based UI
* 🎨 **Tailwind CSS** – Utility-first styling
* 🔗 **React Icons** – Scalable vector icons
* 🧹 **ESLint & Prettier** – Code linting & formatting

---

## 🚀 Deployment

Easily deployable on:

* [Vercel](https://vercel.com)
* [Netlify](https://www.netlify.com)
* [GitHub Pages](https://pages.github.com)

