# **Employee Directory**

## Overview

An employee directory system application that stores and manages employee information within an organization.
It allows HRs to search, view, and manage employee details such as names, job titles, departments, contact information, and more.

## [Flow Chart](https://lucid.app/lucidchart/916a75b6-7552-424f-8b69-9dd0bf828ef6/view)

![Flowchart](Employee_Directory_Flowchart.png)

## Installation & Setup

### Server Setup

#### **1- Install backend dependencies**

```sh
npm install
```

#### **2- Create `.env` file in the server directory with the following**

```sh
DATABASE_URL = mysql://<username>:<password>@<host>:<port>/<database_name>

JWT_SECRET = your_secret_key

JWT_EXPIRES_IN = time_in_seconds
```

#### **3- Start the server (with nodemon)**

```sh
npm start
```

#### **4- The server should now be running on `http://localhost:3000`**

### Client Setup

#### **1- Install frontend dependencies**

```sh
npm install
```

#### **2- Start the frontend**

```sh
npm start
```

#### **3- The client should now be running on `http://localhost:5173`**

## Tech Stack

### Frontend (React + TypeScript)

- React.js – For building a scalable frontend.

- Tailwind CSS – Utility-first CSS framework for styling.

- Material-UI (MUI) – Component library for modern UI design.

- React Router – Client-side navigation.

- Fetch API – Making HTTP requests.

### Backend (Node.js + Express.js)

- Node.js – JavaScript runtime for backend development.

- Express.js – Lightweight web framework for building REST APIs.

- JWT (JSON Web Token) – Secure authentication and authorization.

- Bcrypt.js – Password hashing for user authentication.

- Express Validator – Middleware for input validation.

- Postman – API testing tool.

### Database & ORM

- MySQL – Relational database for structured data storage.

- Drizzle ORM – TypeScript ORM for MySQL database management.
