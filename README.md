# TaskFlow - React Todo Application

A modern and responsive task management application built with **React 19**, **Vite 7**, and **Tailwind CSS 4**. TaskFlow helps users capture, manage, and track daily tasks with a clean UI and persistent local storage.

## Project Snapshot

- Built a complete CRUD todo workflow: create, edit, complete, delete
- Implemented persistent state with browser `localStorage`
- Added UX controls such as task filtering (`Show Finished Tasks`) and disabled invalid submissions
- Designed a polished, glassmorphism-inspired interface using Tailwind utility-first styling

## Features

- Add new tasks with validation
- Mark tasks as completed/incomplete
- Edit existing tasks
- Delete tasks
- Toggle visibility of completed tasks
- Persist task data across page reloads
- Mobile-friendly responsive layout

## Tech Stack

- **Frontend:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Utilities:** `uuid` for unique task IDs
- **Linting:** ESLint 9

## Why This Project Matters

This project demonstrates practical frontend engineering skills recruiters look for:

- Component-based architecture with reusable UI (`Navbar`, `App`)
- State management using React hooks (`useState`, `useEffect`)
- Data persistence and browser API integration (`localStorage`)
- Clean UX decisions (validation, task filtering, status-driven styling)
- Maintainable development workflow with linting and modern tooling

## Project Structure

```text
ReactTodo/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Navbar.jsx
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|-- eslint.config.js
|-- index.html
|-- package.json
|-- vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/ReactTodo.git
cd ReactTodo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app will run at `http://localhost:5173/` by default.

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Potential Enhancements

- Add due dates and task priorities
- Implement drag-and-drop task ordering
- Add dark/light theme toggle
- Integrate backend authentication and cloud sync
- Add unit and component tests (Vitest + React Testing Library)

## Author

**Hritik Sharma**  
Frontend Developer (React, JavaScript, UI Engineering)
