# User Cards Project

A modern React application that displays user profile cards with a responsive grid layout. Built with React, Vite, and TailwindCSS.

## 🌟 Features

- Responsive grid layout that adapts to different screen sizes
- Beautiful user profile cards with:
  - Profile images
  - User names and roles
  - Social media icons
  - Action buttons
  - Engagement metrics
- Modern UI with shadows and smooth transitions
- Data-driven approach using JSON for user information

## 🛠️ Technologies Used

- React 19
- Vite 7
- TailwindCSS 4
- RemixIcon
- ESLint for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Cards_Project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Button.jsx    # Reusable button component
│   ├── UserCard.jsx  # Main card component
│   └── user.json     # User data
├── App.jsx           # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## 🎨 Features Breakdown

### UserCard Component
- Profile image section with circular avatar
- User information display (name and role)
- Social media icons (Instagram, WhatsApp, Facebook, Twitter)
- Action buttons (Message and Subscribe)
- Engagement metrics (likes, comments, followers)

### Responsive Design
- 3 columns on large screens (>1200px)
- 2 columns on medium screens (900px-1200px)
- 1 column on mobile screens (<600px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📝 Notes

- The project uses TailwindCSS for styling
- RemixIcon is used for social media and engagement icons
- User data is stored in a JSON file for easy management
- ESLint is configured for React best practices


---
