# =============================================================================
# routes/__init__.py
# =============================================================================
# This file defines the route blueprints.
# Blueprints help organize routes into separate files.
# =============================================================================

from flask import Blueprint, request, jsonify
import re

# =============================================================================
# CONTACT ROUTES (POST /contact)
# =============================================================================
# This blueprint handles the contact form submission.
# =============================================================================
contact_routes = Blueprint('contact_routes', __name__)

# Temporary storage for contact messages (beginner-friendly, no database needed)
# In a real app, you would save these to SQLite or another database.
contact_messages = []

@contact_routes.route('/contact', methods=['POST'])
def submit_contact():
    """
    Handle contact form submission.
    Expects JSON body with: name, email, message
    """
    # Get data from the request body as JSON
    data = request.get_json()

    # --- VALIDATION ---
    # Check if data was sent
    if not data:
        return jsonify({
            "success": False,
            "message": "No data provided"
        }), 400

    # Check for missing fields
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    message = data.get('message', '').strip()

    if not name:
        return jsonify({
            "success": False,
            "message": "Name is required"
        }), 400

    if not email:
        return jsonify({
            "success": False,
            "message": "Email is required"
        }), 400

    if not message:
        return jsonify({
            "success": False,
            "message": "Message is required"
        }), 400

    # Validate email format using a simple regex pattern
    # This checks for: text @ text . text
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if not re.match(email_pattern, email):
        return jsonify({
            "success": False,
            "message": "Invalid email format"
        }), 400

    # --- STORE THE MESSAGE ---
    # Add the message to our temporary list
    new_message = {
        "id": len(contact_messages) + 1,
        "name": name,
        "email": email,
        "message": message
    }
    contact_messages.append(new_message)

    # Log to console so we can see it during development
    print(f"New contact message from {name} ({email})")

    # Return success response
    return jsonify({
        "success": True,
        "message": "Message received successfully",
        "data": new_message
    }), 200

@contact_routes.route('/contact', methods=['GET'])
def get_contacts():
    """
    Get all stored contact messages (for admin/testing purposes).
    """
    return jsonify({
        "success": True,
        "count": len(contact_messages),
        "messages": contact_messages
    }), 200
