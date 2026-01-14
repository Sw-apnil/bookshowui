# 🎬 QuickShow – Frontend 

QuickShow is a modern **movie ticket booking platform** frontend built using **React**, **Vite**, and **TailwindCSS**.  
This application allows users to browse movies, watch trailers, select seats, book tickets, and manage favorites with a smooth and responsive UI.

---

## ✨ Features

- 🎥 **Movie Browsing** – Browse a rich catalog of movies  
- 🎬 **Trailer Playback** – Watch movie trailers using ReactPlayer  
- 🎫 **Interactive Seat Selection** – Visual seat layout for ticket booking  
- ⭐ **Favorites** – Save and manage favorite movies  
- 📱 **Responsive Design** – Mobile-first UI with TailwindCSS  
- 🔐 **Authentication** – Secure user authentication with Clerk  
- 💳 **Payments** – Stripe checkout for ticket bookings  
- 📧 **Booking Confirmations** – Real-time booking updates  
- 🔔 **Toast Notifications** – Notifications using react-hot-toast  
- 🎨 **Modern UI** – Clean, intuitive, and user-friendly interface  

---

## 🛠️ Tech Stack

- **React 19.2.0** – Modern React with concurrent features  
- **Vite 7.2.4** – Fast development server and build tool  
- **TailwindCSS 4.1.18** – Utility-first CSS framework  
- **React Router DOM 7.11.0** – Client-side routing  
- **Clerk React 5.59.3** – Authentication & user management  
- **Axios 1.13.2** – HTTP client  
- **React Player 3.4.0** – Trailer/video playback  
- **React Hot Toast 2.6.0** – Toast notifications  
- **Lucide React 0.562.0** – Icon library  

---

## 📋 Prerequisites

- Node.js **v18+**
- npm or yarn
- Backend server running (default: `http://localhost:3000`)

---

## 🚀 Installation

### 1️⃣ Navigate to client directory
```bash
cd client
npm install
# Currency Symbol
VITE_CURRENCY=₹

# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Backend API URL
VITE_BASE_URL=http://localhost:3000

# TMDB Image Base URL
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
npm run dev


client/
├── src/
│   ├── assets/              # Images & static assets
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   ├── TrailerSection.jsx
│   │   └── ...
│   ├── context/             # React Context providers
│   ├── lib/                 # Utility & helper functions
│   ├── pages/               # Application pages
│   │   ├── admin/           # Admin dashboard pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AddMovie.jsx
│   │   │   ├── AddShow.jsx
│   │   │   └── ...
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── SeatLayout.jsx
│   │   ├── MyBookings.jsx
│   │   └── Favorite.jsx
│   ├── App.jsx              # App routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .env
├── .eslintrc.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
npm run dev
npm run preview
npm run lint
```




## 🤝 Contributing

Contributions are welcome and appreciated! Please follow these guidelines to maintain code quality and consistency:

- Follow the existing **folder and file structure**
- Use **functional components** and **React hooks**
- Keep components **small, reusable, and focused**
- Ensure the UI is **fully responsive**
- Test changes on **multiple screen sizes** (mobile, tablet, desktop)

---

## 📝 Code Standards

To keep the codebase clean and maintainable:

- Use **ES6+** JavaScript syntax
- Follow **React best practices**
- Use **clear and meaningful** variable & component names
- Extract reusable logic into **custom hooks**
- Apply proper **prop validation** (PropTypes or TypeScript)

---
## 🔑 Environment Variables

| Variable | Description | Example |
|--------|------------|---------|
| VITE_CURRENCY | Currency symbol | ₹ / $ |
| VITE_CLERK_PUBLISHABLE_KEY | Clerk public key | pk_test_... |
| VITE_BASE_URL | Backend API URL | http://localhost:3000 |
| VITE_TMDB_IMAGE_BASE_URL | TMDB image CDN URL | https://image.tmdb.org/t/p/original |

---

## 🎯 Key Pages

### User Pages
- `/` – Home (featured movies)
- `/movies` – Browse movies
- `/movies/:id` – Movie details & trailer
- `/seat-layout/:showId` – Seat selection
- `/my-bookings` – Booking history
- `/favorites` – Favorite movies

### Admin Pages (Protected)
- `/admin/dashboard` – Analytics dashboard
- `/admin/add-movie` – Add movies
- `/admin/add-show` – Schedule shows
- Manage movies & shows

---

## 🎨 Styling

- TailwindCSS 4
- Mobile-first responsive layout
- Smooth animations and transitions
- Modern glassmorphism effects
- Interactive hover states

---

## 🔐 Authentication

Authentication is handled using **Clerk**:

- Email & password authentication
- Social login support
- Protected routes for authenticated users
- Role-based access control for admin pages

---

## 🌐 API Integration

- Axios for API communication
- Base URL configured via `VITE_BASE_URL`
- Automatic token injection using Clerk
- Global error handling with toast notifications

## 💡 Tip

⚠️ Ensure the backend server is running before starting the frontend.

Happy coding! 🚀





