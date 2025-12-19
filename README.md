

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# BlueTutor – SDG 14: Life Below Water

**BlueTutor** is a web app developed by **Eunice Medalla Gojit** to educate users about **Sustainable Development Goal 14 (Life Below Water)**. The app provides an interactive and readable lesson page about ocean conservation, marine biodiversity, and actionable steps to protect marine life.

---

## Tech Stack

- **Next.js 13** (App Router) – React framework for server and client rendering
- **React** – UI component library
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Heroicons** – Icon set used for navigation buttons
- **Node.js** – JavaScript runtime for backend and build processes

---

## Project Structure

The app uses the Next.js App Router (`app/` directory), with lesson and quiz content organized by topics:

- `app/lessons/` — Contains lesson pages by topic:
  - `biodiversity/page.jsx`
  - `climate/page.jsx`
  - `coral/page.jsx`
  - `energy/page.jsx`
  - `marin/page.jsx` *(consider renaming to `marine` for consistency)*
  - `ocean/page.jsx`
  - `sdg14/page.jsx` (Main SDG 14 lesson page)

- `app/quiz/` — Contains quizzes related to the lesson topics:
  - `biodiversity/page.jsx`
  - `climatechange/page.jsx`
  - `coralreefs/page.jsx`
  - `marinelife/page.jsx`
  - `oceanpollution/page.jsx`
  - `renewableenergy/page.jsx`

---

## How to navigate

- The main SDG 14 lesson is at `/lessons/sdg14`
- Each quiz is available under `/quiz/[topic]`
- Navigation buttons throughout the app allow moving back to lessons and home

---

## Getting Started (Development)

1. Clone the repository:

```bash
git clone https://github.com/yourusername/BlueTutor.git
cd BlueTutor
## Credits

Developed by **Eunice Medalla**  
Created with [Next.js](https://nextjs.org) and styled using [Tailwind CSS](https://tailwindcss.com)  
