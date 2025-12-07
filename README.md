# 🚀 Job Listing Application (Frontend Internship Task)

This project is a Job Listing Web Application developed using **React.js** and leverages a **local JSON Server** to simulate a backend API. It fulfills all requirements of the Frontend Internship Task, focusing on state management, asynchronous data handling, and faithful UI reproduction.

## ✨ Features Implemented

- **Full CRUD Functionality:** Complete support for **C**reate, **R**ead, **U**pdate, and **D**elete operations using **Axios** to interact with the local REST API.
- **Data Presentation:** Displays a comprehensive list of 15+ jobs with all required fields (title, company, salary, location, skills, etc.).
- **Advanced Filtering:** Jobs can be filtered by **Job Type, Employment Type, Seniority Level, and Location**.
- **Search Capability:** Allows users to search job titles and company names.
- **UI Fidelity:** The user interface is meticulously designed to match the provided screenshots.
- **Modern React Hooks:** Built entirely using functional components, leveraging **`useState`** for local state and **`useEffect`** for data fetching and filtering logic.

## ⚙️ How to Run the Project Locally (Crucial Steps)

This application uses a two-server model for development:

1.  **React Frontend:** Runs on `http://localhost:3000`.
2.  **Local API (JSON Server):** Runs on `http://localhost:5000`.

### Prerequisites

You must have **Node.js** (v14+) and **npm** installed.

1.  **Install JSON Server Globally:** (Required to run the mock API)
    ```bash
    npm install -g json-server
    ```

### Setup and Start

Please open **two separate terminal windows** inside the project root directory (`job-listing/`).

#### **Terminal 1: Start the Local API**

This terminal will run the JSON Server, which reads the data from `db.json` and exposes the API endpoints (`/jobs`, `/jobs/:id`).

```bash
json-server --watch db.json --port 5000
```
