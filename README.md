APURA — Thumbstack Frontend Machine Test

A pixel-perfect, responsive, high-performance frontend built based on the provided Figma design.
This project demonstrates my ability to convert UI/UX designs into clean, production-ready code while maintaining design accuracy, responsiveness, and performance.

🚀 Live Demo

🔗 Vercel Deployment: https://apura-thumbstack-q5li.vercel.app/

🔗 GitHub Repository: https://github.com/Ashraf-git-projects/APURA-thumbstack.git

📌 About the Assignment

This project was completed as part of Thumbstack’s MERN Developer / Full-Stack Developer hiring process.

The objective was to implement the provided Figma design with:

Pixel-perfect styling

Smooth responsiveness across all devices

Clean and maintainable React code

Good performance & accessibility

Proper componentization

The entire UI mimics the Figma layout precisely on both desktop and mobile screens.

🛠️ Tech Stack
Frontend

React (Vite)

CSS (Modular, custom styling)

React-Icons

Custom responsiveness (media queries)

Deployment

Vercel (optimized for frontend hosting)

📂 Project Structure
src/
  components/
    Navbar.jsx
    Hero.jsx
    Signup.jsx
    Ecosystem.jsx
    Products.jsx
    About.jsx
    Roadmap.jsx
    Support.jsx
    Newsletter.jsx
    Footer.jsx
  assets/
  App.jsx
  main.jsx
  styles/


Each UI section is built as a separate component for maintainability and clarity.

📱 Responsiveness

The UI layout was made fully responsive using a 3-breakpoint strategy:

Device	Range
Mobile	≤ 768px
Tablet	768px – 1024px
Desktop	≥ 1024px

Mobile and tablet screens have fully reflowing components including:

Mobile hamburger navigation

Horizontally scrollable product cards

Stacked layout for all sections

Scaled typography

Adjusted spacing/padding

Optimized image sizes

🎨 Pixel-Perfect Implementation

Key design fidelity highlights:

Typography, spacing, letter-spacing, line heights match Figma

Color palette identical to the design

Auto-scroll navigation using section IDs

Smooth component transitions

Layout grids mirror exact Figma placement

Button styles & hover states implemented

Map images & icons rendered proportionally

⚡ Performance Optimizations

Vite bundling for fast builds

Lightweight component structure

Avoided unnecessary libraries

Reused CSS variables for cleaner styling

Optimized images

Minimal DOM re-renders

📦 Installation & Setup
1. Clone the repository
git clone https://github.com/Ashraf-git-projects/APURA-thumbstack.git

2. Install dependencies
npm install

3. Start development server
npm run dev

4. Build for production
npm run build

🧩 Approach & Thought Process
✔ Step-wise implementation

Setup React + Vite

Built desktop layout pixel-perfect first

Completed all UI sections individually

Added responsiveness from top to bottom

Performed manual fine-tuning

Deployed to Vercel

Cross-tested on multiple screen sizes

✔ Minimal external dependencies

The entire UI is built with custom CSS — ensuring total control over layouts and faster load times.

✔ Clean componentization

Each major section is isolated, making the code easy to navigate and maintain.

🧪 Trade-offs

No backend integration was required per assignment, so form actions are static.

Manually fine-tuned CSS to match Figma line-by-line rather than using a UI library.

Certain text sizes/spacing were approximated to ensure readability across devices.

✨ Possible Future Enhancements

If continued, the project can include:

Form validation + integrations

Animations (framer-motion / GSAP)

Dark mode support

Reusable UI component library

Accessibility improvements (keyboard navigation, ARIA tags)

👨‍💻 Developer

Ashraf Hussain Siddiqui
Frontend / MERN Developer
Repository: https://github.com/Ashraf-git-projects/APURA-thumbstack
