# Employee Status Dashboard

## Overview

The **Employee Status Dashboard** is a web-based application that allows users to manage and view the status of employees within an organization. This application features a backend server built with **Express.js** and a frontend built using **React.js**, **React Query**, and **Tailwind CSS**. The app allows users to view employees' current statuses, filter them by status, search for employees, and update employee statuses.

## Features

- **Employee List**: Displays a list of all employees with their current status.
- **Status Filtering**: Filters employees based on their current status (e.g., **Working**, **OnVacation**, **LunchTime**, **BusinessTrip**).
- **Employee Search**: Allows users to search for employees by their names.
- **Update Employee Status**: Users can update the status of employees through a dropdown menu.
- **Create New User Modal**: Allows users to create a new user, but currently only closes the modal on selecting "Create" or "Cancel". Input fields restrict characters to English alphabets only.

## Technologies

- **Frontend**:
  - **React.js**: JavaScript library for building user interfaces.
  - **React Query**: Data-fetching and state management library.
  - **Tailwind CSS**: Utility-first CSS framework for building custom designs.

- **Backend**:
  - **Express.js**: Minimalist web framework for Node.js to build RESTful APIs.
  - **Nodemon**: Tool to automatically restart the server during development.

## Environment Setup

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Vite** (for frontend development)

### Installation

Follow these steps to set up the project locally.

#### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/plukasz0131/hometask.git
cd hometask
```

#### 2. Install all dependencies
To install dependencies for both the frontend (client), backend (server), and the root directory, run the following command:

```bash
npm run install-dependencies
```

This will install the necessary dependencies in the root directory, as well as in the client and server directories.

#### 3. ### Running the Application

Once the dependencies are installed, you can run both the server and the client with a single command.

**Start both the backend server and the frontend client**:

  From the root directory of your project, simply run:

  ```bash
  npm run dev
  ```

Development
Frontend
React.js: A JavaScript library for building the user interface.

React Query: For handling data-fetching and caching.

Tailwind CSS: A utility-first CSS framework to speed up UI development.

Backend
Express.js: A minimal and flexible Node.js web application framework for building RESTful APIs.

Nodemon: Automatically restarts the server on file changes during development.

Notes
The "Create New User" modal does not currently save data to the backend, but it can be closed via the "Create" or "Cancel" buttons.

The input fields for employee names are restricted to English alphabetical characters only.

Conclusion
The Employee Status Dashboard provides an intuitive interface for managing employee status information. With a clean and modern design, it enables easy filtering, searching, and updating of employee statuses. This project is built using modern web technologies including React, Express, and Tailwind CSS, providing a full-stack solution for managing employee data.