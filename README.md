# 📊 Dataset Explorer

Dataset Explorer is a full-stack web application that allows users to discover, search, filter and explore public datasets from different organizations. It provides a clean and responsive interface for browsing datasets, viewing metadata, and accessing dataset resources.

The application is built using the MERN stack (MongoDB, Express.js, React, Node.js) with a focus on reusable components, responsive design, and clean architecture.

---

# 🚀 Project Overview

The application provides:

- Browse datasets in a responsive table
- View detailed information about each dataset
- Search datasets by keyword
- Filter datasets by category
- Pagination support
- Category Explorer
- Statistics Dashboard
- About page describing the platform
- Responsive UI for Desktop, Tablet and Mobile

---

# 🛠 Technology Stack

## Frontend

- React 19
- TypeScript
- React Router DOM
- Axios
- SCSS (SASS)
- Lucide React Icons
- Vite

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

## Database

- MongoDB

---

# 📁 Project Structure

```
dataset-explorer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

# ⚙️ Prerequisites

Install the following before running the project:

- Node.js (v20+ recommended)
- npm
- MongoDB (Local or MongoDB Atlas)

---

# 💻 Frontend Setup

Navigate to the frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:5000/api
```

Run the development server

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🔧 Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
PORT=5000

MONGODB_URI=mongodb://127.0.0.1:27017/dataset-explorer

NODE_ENV=development
```

Run the backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# 🗄 Database Setup

## Option 1 — Local MongoDB

Install MongoDB Community Edition.

Create a database

```
dataset-explorer
```

The application will automatically create the required collection when data is inserted.

---

## Option 2 — MongoDB Atlas

Replace the connection string in `.env`

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dataset-explorer
```

Restart the backend server.

---

# 📚 API Endpoints

## Dataset APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/datasets` | Get all datasets |
| GET | `/api/datasets/:id` | Get dataset details |
| POST | `/api/datasets` | Create dataset |
| PUT | `/api/datasets/:id` | Update dataset |
| DELETE | `/api/datasets/:id` | Delete dataset |

### Metadata APIs

| Method | Endpoint |
|---------|----------|
| GET | `/api/datasets/meta/categories` |
| GET | `/api/datasets/meta/organizations` |

---

# ✨ Features

- Responsive Layout
- Reusable Components
- Sidebar Navigation
- Header & Footer
- Search Functionality
- Category Filter
- Pagination
- Dataset Statistics
- Dataset Details Page
- Category Explorer
- About Page
- Dynamic Badge Colors
- Loading State
- Empty State ("No Data Found")
- API Integration
- Clean Folder Structure

---

# 📱 Responsive Design

The application is optimized for

- Desktop
- Laptop
- Tablet
- Mobile

---

# 📂 Reusable Components

- Button
- Input
- Select
- Badge
- Card
- Loader
- Pagination
- Sidebar
- Header
- Footer
- Main Layout

---

# 📈 Future Improvements

- Authentication & Authorization
- Dataset Download Tracking
- Bookmark/Favorites
- Advanced Filtering
- Sorting
- Dark Mode
- Dashboard Analytics
- User Roles
- CSV/Excel Export
- Unit & Integration Tests
- Docker Support

---

# ⚠️ Assumptions Made

- Public datasets do not require user authentication.
- Dataset resources are represented by URLs and are not uploaded through the application.
- Categories and organizations are derived dynamically from the dataset collection.
- Pagination is supported through backend APIs.
- MongoDB is assumed to be running locally unless MongoDB Atlas is configured.
- Dataset metadata (Source, Geography, Year) is stored with each dataset.
- The application focuses on dataset discovery and exploration rather than data editing workflows.

---

# 👩‍💻 Author

**Jyoti Kamble**

Full Stack Engineer

React • TypeScript • Node.js • MongoDB • Express.js

---