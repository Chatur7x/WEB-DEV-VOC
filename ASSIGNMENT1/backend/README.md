# Portfolio Backend - Python Flask

A beginner-friendly backend for a Personal Portfolio Website built with Python and Flask.

---

## Folder Structure

```
backend/
│
├── app.py              # Main Flask application (entry point)
├── requirements.txt    # Python dependencies
├── routes/
│   ├── __init__.py     # Contact form routes (POST /contact)
│   └── data_routes.py  # Data routes (GET /projects, /skills, /about)
├── templates/          # HTML templates (not used in this API-only backend)
├── static/             # Static files like CSS/JS/images (not used here)
└── database/           # SQLite database files (reserved for future use)
```

---

## How to Install and Run

### Step 1: Install Python
Make sure Python is installed on your system.
Check by running:
```
python --version
```

### Step 2: Create a Virtual Environment (Optional but Recommended)
```
python -m venv venv
```

Activate it:
- **Windows:** `venv\Scripts\activate`
- **Mac/Linux:** `source venv/bin/activate`

### Step 3: Install Dependencies
```
pip install -r requirements.txt
```

This installs:
- `flask` - The web framework
- `flask-cors` - Allows frontend to connect to backend

### Step 4: Run the Backend
```
python app.py
```

You should see:
```
Starting Portfolio Backend on http://localhost:5000
Press Ctrl+C to stop the server
```

---

## API Endpoints

| Method | Route        | Description                     |
|--------|-------------|---------------------------------|
| GET    | `/`         | Check if backend is running     |
| POST   | `/contact`  | Submit a contact form message   |
| GET    | `/contact`  | Get all stored messages         |
| GET    | `/projects` | Get list of projects            |
| GET    | `/skills`   | Get list of skills              |
| GET    | `/about`    | Get about me information        |

---

## How to Test APIs

### Using Browser
Just open these URLs in your browser:
- `http://localhost:5000/`
- `http://localhost:5000/projects`
- `http://localhost:5000/skills`
- `http://localhost:5000/about`

### Using Postman or Thunder Client
1. Open Postman
2. Set method to `POST`
3. URL: `http://localhost:5000/contact`
4. Body → raw → JSON:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I like your portfolio."
}
```
5. Click Send

### Using cURL (Terminal)
```bash
curl http://localhost:5000/projects

curl -X POST http://localhost:5000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","message":"Hi!"}'
```

---

## How to Connect Frontend with fetch()

Add this to your `script.js` file:

### Example 1: Fetch Projects
```javascript
fetch('http://localhost:5000/projects')
  .then(response => response.json())
  .then(data => {
    console.log(data.projects);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Example 2: Submit Contact Form
```javascript
const formData = {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello from the frontend!'
};

fetch('http://localhost:5000/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Message sent successfully!');
    } else {
      alert('Error: ' + data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Example 3: Fetch Skills
```javascript
fetch('http://localhost:5000/skills')
  .then(response => response.json())
  .then(data => {
    console.log(data.skills);
  });
```

---

## Error Handling

The backend handles these errors:
- **400** - Bad request (missing fields, invalid email)
- **404** - Route not found
- **405** - Wrong HTTP method
- **500** - Internal server error

All errors return JSON responses like:
```json
{
  "success": false,
  "error": "Route not found"
}
```

---

## Notes for Beginners

1. **No Database Yet**: Messages are stored in a Python list. They disappear when you restart the server. This is fine for learning.
2. **CORS is Enabled**: The frontend can connect from any domain. In production, you should restrict this.
3. **Debug Mode**: `debug=True` auto-restarts the server when you change code. Turn it off in production.
4. **Blueprints**: We use Flask Blueprints to organize routes into separate files. This keeps code clean.
