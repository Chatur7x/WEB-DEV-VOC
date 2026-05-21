# Personal Portfolio Website

A beginner-friendly full-stack portfolio website built with HTML, CSS, JavaScript (frontend) and Python Flask (backend). Perfect for web development internship submissions.

---

## Overview

This project is a complete personal portfolio website that showcases skills, projects, and contact information. It has a clean, responsive frontend and a simple REST API backend.

---

## Features

- **Responsive Design** — Works on mobile, tablet, and desktop
- **Dark Mode** — Toggle between light and dark themes
- **Sticky Navbar** — Fixed navigation with mobile hamburger menu
- **Contact Form API** — Backend validates and stores messages
- **REST API** — JSON endpoints for projects, skills, and about data
- **Scroll to Top** — Button appears when scrolling down
- **No Frameworks** — Pure HTML, CSS, JS + Flask only

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript | Interactivity and API calls |
| Font Awesome | Icons |
| Google Fonts (Poppins) | Typography |

### Backend
| Technology | Purpose |
|---|---|
| Python 3 | Server language |
| Flask | Web framework |
| Flask-CORS | Cross-origin support |

---

## Project Structure

```
INTERNSHIP-ASIGN-1/
│
├── index.html              # Main HTML file (frontend)
├── style.css               # All styles (frontend)
├── script.js               # JavaScript logic (frontend)
│
├── backend/
│   ├── app.py              # Flask server entry point
│   ├── requirements.txt    # Python dependencies
│   ├── README.md           # Backend documentation
│   ├── routes/
│   │   ├── __init__.py     # Contact form API routes
│   │   └── data_routes.py  # Projects, skills, about routes
│   ├── templates/          # (reserved for future)
│   ├── static/             # (reserved for future)
│   └── database/           # (reserved for future)
│
└── DESIGN.md               # Design documentation
```

---

## How to Run

### 1. Start the Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend runs on: `http://localhost:5000`

### 2. Open the Frontend

Double-click `index.html` or open in browser:
```
file:///path/to/INTERNSHIP-ASIGN-1/index.html
```

---

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Check server status |
| GET | `/projects` | Get all projects |
| GET | `/skills` | Get all skills |
| GET | `/about` | Get about me info |
| POST | `/contact` | Submit contact message |
| GET | `/contact` | View all messages |

### POST /contact Example

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

Response:
```json
{
  "success": true,
  "message": "Message received successfully"
}
```

---

## Frontend Sections

| Section | Content |
|---|---|
| Navbar | Logo, links, dark mode toggle, hamburger |
| Hero | Name, title, intro, CTA buttons |
| About | Bio paragraph |
| Skills | 8 skills with progress bars |
| Interests | 4 interest cards |
| Projects | 2 project cards (Calculator, To-Do List) |
| Contact | Info + form (connected to backend) |
| Footer | Social links, copyright |

---

## Related Documents

- [Backend Docs](backend/README.md)
- [Design Docs](DESIGN.md)
