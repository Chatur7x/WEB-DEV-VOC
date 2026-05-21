# =============================================================================
# app.py - Main Flask Application
# =============================================================================
# This is the entry point of our backend.
# It sets up the Flask server, enables CORS, and defines all API routes.
# =============================================================================

from flask import Flask, request, jsonify
from flask_cors import CORS
from routes import contact_routes
from routes.data_routes import data_routes

# Create the Flask application
app = Flask(__name__)

# Enable CORS so our frontend (HTML/CSS/JS) can talk to this backend
# CORS = Cross-Origin Resource Sharing
CORS(app)

# =============================================================================
# REGISTER ROUTES
# =============================================================================
# We separate routes into different files to keep code organized.
# contact_routes handles the contact form API.
# data_routes handles projects, skills, and about data APIs.
# =============================================================================
app.register_blueprint(contact_routes)
app.register_blueprint(data_routes)

# =============================================================================
# HOME ROUTE
# =============================================================================
# This route runs when someone visits the base URL: http://localhost:5000/
# It returns a simple JSON message to confirm the backend is running.
# =============================================================================
@app.route('/')
def home():
    """Home route - confirms backend is running."""
    return jsonify({
        "status": "running",
        "message": "Portfolio Backend Running",
        "version": "1.0"
    })

# =============================================================================
# ERROR HANDLERS
# =============================================================================
# These handle common errors like 404 (page not found) and 500 (server error).
# They return clean JSON responses instead of HTML error pages.
# =============================================================================

@app.errorhandler(404)
def not_found(error):
    """Handle 404 - Route not found."""
    return jsonify({
        "success": False,
        "error": "Route not found"
    }), 404

@app.errorhandler(405)
def method_not_allowed(error):
    """Handle 405 - Wrong HTTP method used."""
    return jsonify({
        "success": False,
        "error": "Method not allowed"
    }), 405

@app.errorhandler(500)
def server_error(error):
    """Handle 500 - Internal server error."""
    return jsonify({
        "success": False,
        "error": "Internal server error"
    }), 500

# =============================================================================
# RUN THE SERVER
# =============================================================================
# debug=True means the server auto-restarts when you change code.
# port=5000 is the default Flask port.
# =============================================================================
if __name__ == "__main__":
    print("Starting Portfolio Backend on http://localhost:5000")
    print("Press Ctrl+C to stop the server")
    app.run(debug=True, port=5000)
