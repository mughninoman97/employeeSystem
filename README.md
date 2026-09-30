# Employee Management System

A full-stack web application for managing employee records. Users can add employees, view the employee list, update records, and delete records through a web interface connected to a backend API.

## Live application

[Click here to check the project](https://employeemanagementfrontend-rho.vercel.app/)


## What it can do

- Add employee records.
- View the list of employees.
- Update employee information.
- Delete employee records.
- Store and retrieve records through a backend API.

## Who can use it

This project is suitable as a simple employee-record tool for small businesses, HR teams, or as a starting point for a larger workforce-management system. Access control and user authentication can be added if the application will handle sensitive employee information.

## Technologies used

**Frontend**
- React
- Vite
- Axios
- Tailwind CSS
- React Router

**Backend**
- Node.js
- Express
- MongoDB with Mongoose
- CORS

**Deployment**
- Vercel for the frontend
- Render for the backend

## How it is built

The frontend is a React single-page application created with Vite. It sends HTTP requests through Axios to the Express backend. The backend provides API routes for creating, listing, updating, and deleting employee records, and uses the employee model to interact with the database.

The frontend’s API base URL is configured with the `VITE_API_URL` environment variable.

## Run locally

### Backend

From the `Backend` directory, install dependencies and start the server using the scripts defined in `Backend/package.json`:

```sh
npm install
npm start
```

Configure the backend’s required database and other environment variables in a local `.env` file. Do not commit secrets.

### Frontend

From the `Frontend` directory, create a `.env.local` file containing your local backend URL:

```env
VITE_API_URL=http://localhost:3000
```

Then install dependencies and start the development server:

```sh
npm install
npm run dev
```

For a production build:

```sh
npm run build
```

## API routes

| Method | Route | Purpose |
|---|---|---|
| `POST` | `/post` | Add an employee |
| `GET` | `/allemp` | Retrieve employees |
| `PATCH` | `/update/:id` | Update an employee |
| `DELETE` | `/delete/:id` | Delete an employee |

## Deployment configuration

Set `VITE_API_URL` in Vercel to the Render backend’s base URL, such as `https://your-backend.onrender.com`. Do not include an API route like `/allemp`. Redeploy the frontend after changing the variable.