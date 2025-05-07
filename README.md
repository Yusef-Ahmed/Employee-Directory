# **Employee Directory**

## Overview

An employee directory application that stores and manages employee information within an organization.
It allows HR professionals to search, view, and manage employee details including names, job titles, departments, contact information, and more.

## [Flow Chart](https://lucid.app/lucidchart/916a75b6-7552-424f-8b69-9dd0bf828ef6/view)

![Flowchart](Employee_Directory_Flowchart.png)

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

## Installation & Setup

### With Docker

##### **1- Go into server directory and create `.env` file as following**

```env
JWT_SECRET=SOME_SECRET_KEY
JWT_EXPIRES_IN=30d

# For Docker
DATABASE_URL_DOCKER=mysql://root:12345678@mysql-employee-directory:3306/employee_directory
MYSQL_ROOT_PASSWORD=12345678
MYSQL_DATABASE=employee_directory
```

##### **2- Run docker compose in the root directory**

```sh
docker compose up
```

### Without Docker

#### Server Setup

##### **1- Go into the server directory (from the root directory)**

```sh
cd server
```

##### **2- Create a `.env` file as following**

```env
DATABASE_URL=mysql://<username>:<password>@<host>:<port>/<database_name>

JWT_SECRET=SOME_SECRET_KEY

JWT_EXPIRES_IN=30d
```

***Note**: Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database_name>` with your database credentials*

##### **3- Install backend dependencies**

```sh
npm install
```

##### **4- Open MySQL Workbench and create the database**

```sql
CREATE DATABASE database_name;
```

***Note**: Replace `database_name` with the name you chose in `.env`*

##### **5- Create the database tables**

```sh
npm run db:migrate # Applies migrations to set up tables
```

##### **6- Start the server (with nodemon)**

```sh
npm start
```

The server should now be running at `http://localhost:3000`

#### Client Setup

##### **1- Go into the client directory**

```sh
cd client
```

##### **2- Install frontend dependencies**

```sh
npm install
```

##### **3- Start the frontend**

```sh
npm start
```

The frontend should now be running at `http://localhost:5173`
