# Cyethack Frontend Developer Assignment

## Project Overview

This project is a frontend application built with React, Redux, React Router DOM, and Tailwind CSS. It includes a simple login/logout functionality, data tables, and detailed views of items. The session management is handled using cookies. All data used in this application is static.

## Features

- **Routing:** Implements routes for dashboard, list, and item details.
- **Data Tables:** Displays a list of items with brief descriptions.
- **Item Details:** Shows detailed overview of items.
- **Session Management:** Includes login/logout functionality using cookies.
- **State Management:** Uses Redux for managing session state.
- **Loading Effects:** Shows loading effects while fetching item details.
- **Responsive Design:** Ensures the application works well on various screen sizes.

## Technologies Used

- React
- Redux (Redux Toolkit)
- React Router DOM
- Tailwind CSS
- Cookies (for session management)
- Netlify (for deployment)

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vaishali785/Cyethack-Assignment.git
   cd Cyethack-Assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

## Usage Guide

1. **Login:**

   - Navigate to the `\login` page.
   - Enter your credentials and submit the form.
   - Upon successful login, you will be redirected to the dashboard.

2. **View List of Items:**

   - Navigate to `/list`.
   - You will see a data table with a list of items.

3. **View Item Details:**

   - Click on an item in the list to view its details.
   - The item details will be fetched and displayed on `/list/details`.
   - If you navigate back to the list and select the same item, the details will be shown without reloading.

4. **Logout:**
   - Click the logout button to end the session and clear cookies.

## Code Overview

1. **Routing:**

   - Configured using `react-router-dom`.
   - Routes: `/dashboard`, `/list`, `/list/details`, `/login`.

2. **State Management:**

   - Implemented using Redux.
   - Actions and reducers handle the session state.

3. **Session Management:**

   - Login and logout functionalities are managed using cookies.
   - User session is maintained across different routes.

4. **Loading Effects:**

   - Loading effects are shown while fetching item details.

5. **Styling:**
   - Tailwind CSS is used for styling the application.

## Deployment

The application is deployed on Netlify. You can access the deployed app [here](https://cyethack-assignment.netlify.app/).

### Additional Notes

- **Static Data:** All the data used in this application is static and stored within the codebase.
- **Customization:** You can customize the static data in the source code to meet different requirements.
- **Tailwind CSS:** Tailwind CSS is used for styling the application, ensuring a consistent and modern look.
