# Django React Notes App

This project is a fullstack web application using Python and JavaScript technologies. It leverages Django for the backend and React for the frontend. The application implements JWT authentication for secure user management and includes deployment instructions.

## Table of Contents

- [Backend](#backend)
- [Frontend](#frontend)
- [End Goal](#end-goal)
- [Deployment Notes](#deployment-notes)
- [Django Project Setup](#django-project-setup)
- [Frontend Setup](#frontend-setup)
- [JWT Authentication Flow](#jwt-authentication-flow)
- [Application Screenshots](#application-screenshots)

## Backend

The backend is built with Django and handles API requests and data storage.

### Key Technologies:
- **Django**: Framework for building the backend.
- **django-cors-headers**: Middleware for handling cross-origin requests.
- **djangorestframework-simplejwt**: Package for JWT authentication.
- **psycopg2-binary**: PostgreSQL adapter for Django.
- **python-dotenv**: For managing environment variables.

## Frontend

The frontend is built with React and provides user-facing components to interact with the backend API (e.g., sign-in, sign-out, registration).

### Key Technologies:
- **React**: JavaScript library for building user interfaces.
- **Axios**: Library for making HTTP requests.
- **axios-interceptor**: Intercepts requests to automatically add authentication headers.

## End Goal

The ultimate goal is to deploy both the backend and frontend and ensure they are properly connected.

## Deployment Notes

- Ensure `django-cors-headers` is configured to resolve cross-origin request issues.
- Utilize `djangorestframework-simplejwt` for managing JWT authentication.
- Use `psycopg2-binary` for PostgreSQL database interaction.
- Manage environment variables using `python-dotenv`.
- **JWT Authentication**:
    - JWT tokens are used to manage user authentication. The frontend will request tokens from the backend, which are then used to access protected endpoints.
    - Two types of tokens are issued: **access token** (for making requests) and **refresh token** (for obtaining a new access token).
- **Django ORM and Serializers**:
    - **ORM (Object-Relational Mapping)**: Maps Python objects to database tables, simplifying database operations.
    - **Serializers**: Convert Python objects to JSON format and vice versa, facilitating communication between the API and frontend.
- **Create a Django App**:
    ```bash
    python manage.py startapp api
    ```
    - This command creates a new directory `api` inside the `backend` directory for custom views and code.
- **Axios**:
    - Use Axios for making HTTP requests to the backend.
    - Implement `axios-interceptor` to automatically add JWT tokens to request headers.

## Django Project Setup

1. **Setup Virtual Environment and Install Dependencies**: Navigate to the **backend** folder.

    ```bash
    cd backend/
    python -m virtualenv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

2. **Environment Setup**:

    - Setup the backend using [choreo](https://choreo.dev/). Create a PostgreSQL database, get the environment variables, and include them in the `.env` file inside the `backend/backend` directory.

    ```bash
    # Example .env file
    DB_HOST=your-db-host
    DB_PORT=your-db-port
    DB_USER=your-db-user
    DB_NAME=your-db-name
    DB_PWD=your-db-password
    ```

3. **Migrations**:
    
    - Create migration files:
        ```bash
        python manage.py makemigrations
        ```
    - Apply migrations to the database:
        ```bash
        python manage.py migrate
        ```
    - Run server:
        ```bash
        python manage.py runserver
        ```

## Frontend Setup

1. **Install Dependencies and Start Development Server**:

    ```bash
    cd frontend/
    npm install
    npm run dev
    ```

2. **Configure Environment Variables**:

    Create a `.env` file in the `frontend` directory and set the `VITE_API_URL` variable:

    ```bash
    VITE_API_URL="http://127.0.0.1:8000"
    ```

    This environment variable allows to dynamically set the base URL for all the API requests. By using `import.meta.env.VITE_API_URL` in the code, API URL can easily be loaded or changed based on the environment (development, production, etc.) application is running in. This simplifies the configuration and ensures consistency across your application.

## JWT Authentication Flow

1. **Frontend Authentication**:
    - The frontend sends user credentials to the backend.
    - The backend responds with access and refresh tokens if credentials are valid.

2. **Token Storage**:
    - Store tokens securely on the frontend to manage authentication.

3. **Token Expiry**:
    - **Access Token**: Valid for a short period (e.g., 30 minutes). Use the refresh token to obtain a new access token when it expires.
    - **Refresh Token**: Valid for a longer period (e.g., 1 day). Requires re-authentication upon expiry.

## Application Screenshots

<details>
    <summary>View Application Screenshots</summary>

    <p align="center">
        <img src="./images/Screenshot%20from%202024-08-13%2021-34-22.png" alt="Login Page">
    </p>
    
    <p align="center">
        <img src="./images/Screenshot%20from%202024-08-13%2021-34-44.png" alt="Register Page">
    </p>
    
    <p align="center">
        <img src="./images/Screenshot%20from%202024-08-13%2021-35-22.png" alt="Registering User">
    </p>
    
    <p align="center">
        <img src="./images/Screenshot%20from%202024-08-13%2021-35-47.png" alt="Notes Page">
    </p>
    
    <p align="center">
        <img src="./images/Screenshot%20from%202024-08-13%2021-37-36.png" alt="Note Created">
    </p>
    
    <p align="center">
        <img src="./images/Screenshot%20from%202024-08-13%2021-37-47.png" alt="Second Note Addition">
    </p>
    
    <p align="center">
        <img src="./images/Screenshot%20from%202024-08-13%2021-40-59.png" alt="Second Note Added">
    </p>

</details>

By following these instructions, you will have a complete setup for a Django and React application with JWT authentication and deployment capabilities.