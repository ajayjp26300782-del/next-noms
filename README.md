# NextBites 🍳

NextBites is a modern, responsive recipe catalog web application built with **Next.js (App Router)** and **TypeScript**. It features a centralized data structure, a reusable typed card component, a responsive CSS grid layout, and a shared navigation layout.

- 🔗 **Repository:** https://github.com/ajayjp26300782-del/nextbites
- 🔀 **Open PR:** https://github.com/ajayjp26300782-del/nextbites/pull/1

## 🚀 Features

- **Next.js App Router & TypeScript:** Fully typed architecture ensuring robust type safety (`Recipe` types, strict props, and zero `any` usage).
- **Responsive Recipe Grid:** Automatically reflows across screen sizes using a flexible CSS Grid layout (`auto-fill` and `minmax`).
- **Shared Layout & Navigation:** A persistent top navigation bar embedded within the root layout (`app/layout.tsx`), wrapping `{children}`.
- **Centralized Data:** Clean separation of data and UI via a dedicated mock data module (`app/data/recipes.ts`).

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS / Global CSS
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

```
app/
├── components/
│   ├── NavBar.tsx        # Shared navigation bar
│   └── RecipeCard.tsx    # Typed, reusable recipe card
├── data/
│   └── recipes.ts        # `Recipe` type + mock data
├── globals.css           # Design tokens & card/grid styles
├── layout.tsx            # Root layout: <NavBar /> wrapping {children}
└── page.tsx              # Home page: maps recipes into the grid
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/ajayjp26300782-del/nextbites.git
cd nextbites
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ✅ Build

```bash
npm run build
```

Build output:

```
✓ Compiled successfully
✓ Finished TypeScript
✓ Generating static pages (4/4)

Route (app)
┌ ○ /
└ ○ /_not-found
```
