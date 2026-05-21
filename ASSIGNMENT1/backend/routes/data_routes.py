# =============================================================================
# routes/data_routes.py
# =============================================================================
# This file contains routes that return static portfolio data as JSON.
# In a real app, this data might come from a database.
# For beginners, we use hardcoded data to keep things simple.
# =============================================================================

from flask import Blueprint, jsonify

# Create a blueprint for data routes
data_routes = Blueprint('data_routes', __name__)

# =============================================================================
# SAMPLE DATA
# =============================================================================
# These are Python lists and dictionaries that hold our portfolio data.
# They act like a simple "database" for learning purposes.
# =============================================================================

projects_data = [
    {
        "id": 1,
        "title": "Calculator App",
        "description": "A fully functional calculator built with HTML, CSS, and JavaScript. Supports basic arithmetic operations.",
        "technologies": ["HTML", "CSS", "JavaScript"],
        "github_url": "#",
        "demo_url": "#"
    },
    {
        "id": 2,
        "title": "To-Do List App",
        "description": "A task management app where users can add, complete, and delete tasks. Built using vanilla JavaScript with local storage.",
        "technologies": ["HTML", "CSS", "JavaScript", "LocalStorage"],
        "github_url": "#",
        "demo_url": "#"
    }
]

skills_data = [
    {"name": "HTML", "level": 90},
    {"name": "CSS", "level": 85},
    {"name": "JavaScript", "level": 75},
    {"name": "Responsive Design", "level": 80},
    {"name": "GitHub", "level": 70},
    {"name": "Python", "level": 70},
    {"name": "Java", "level": 65},
    {"name": "AI Tools", "level": 75}
]

about_data = {
    "name": "Chaturvedhi Narsimha",
    "title": "Frontend Developer | Web Development Intern",
    "bio": "I'm an aspiring web developer exploring the world of frontend development. I started with HTML and CSS to build static pages, then added JavaScript to make them interactive. I also have experience with Python and Java, which helped me understand programming logic and problem-solving. Recently, I've been diving into AI tools to see how artificial intelligence can enhance web development workflows.",
    "interests": [
        {"title": "Web Development", "description": "Building modern, responsive websites"},
        {"title": "Artificial Intelligence", "description": "Exploring AI tools for development"},
        {"title": "UI/UX Design", "description": "Creating clean user interfaces"},
        {"title": "Gaming", "description": "Strategy games and game development"}
    ]
}

# =============================================================================
# API ROUTES
# =============================================================================

@data_routes.route('/projects', methods=['GET'])
def get_projects():
    """
    GET /projects
    Returns a list of all portfolio projects as JSON.
    """
    return jsonify({
        "success": True,
        "count": len(projects_data),
        "projects": projects_data
    }), 200

@data_routes.route('/skills', methods=['GET'])
def get_skills():
    """
    GET /skills
    Returns a list of skills with proficiency levels.
    """
    return jsonify({
        "success": True,
        "skills": skills_data
    }), 200

@data_routes.route('/about', methods=['GET'])
def get_about():
    """
    GET /about
    Returns about me information including bio and interests.
    """
    return jsonify({
        "success": True,
        "about": about_data
    }), 200
