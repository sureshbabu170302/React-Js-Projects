
# Worldwise Project 

This is a React project that demonstrates managing cities and user authentication using Context API and `useReducer`. The project includes various functionalities such as fetching cities, creating new cities, deleting cities, and authenticating users with a login/logout mechanism.

## Project Structure

The project consists of two primary contexts:

1. **CitiesContext**: Manages cities data, including fetching, creating, and deleting cities.
2. **AuthContext**: Handles user authentication, login, and logout.

### 1. CitiesContext

The `CitiesContext` provides functionalities to:
- Fetch a list of cities
- Fetch details of a single city by ID
- Create a new city
- Delete a city

It utilizes the following state properties:
- `cities`: Stores the list of all cities.
- `isLoading`: Indicates whether data is being loaded.
- `currentCity`: Stores the currently selected city's details.
- `error`: Stores error messages, if any occur during API requests.

#### Actions:
- `loading`: Starts the loading process.
- `cities/loaded`: Loads the fetched list of cities.
- `city/loaded`: Loads the details of a specific city.
- `city/created`: Adds a newly created city to the list.
- `city/deleted`: Removes a city from the list.
- `rejected`: Handles errors and displays error messages.

### 2. AuthContext

The `AuthContext` is responsible for managing user authentication. It has two primary actions:
- **login**: Logs in a user by validating their email and password.
- **logout**: Logs out the authenticated user.

It manages the following state properties:
- `user`: The logged-in user's information.
- `isAuthenticated`: A boolean indicating whether the user is logged in or not.

The project also includes a fake user for demonstration purposes.

### 3. Routing

The project uses React Router for navigation and includes protected routes for the authenticated part of the app. If a user is not logged in, they cannot access certain routes.

### Lazy Loading

To optimize performance, the project lazily loads certain pages using React's `Suspense` and `lazy`.

### Key Components:
- **CityList**: Displays a list of cities.
- **City**: Displays details of a specific city.
- **CountryList**: Displays a list of countries.
- **Form**: A form for creating or editing cities.
- **ProtectedRoute**: A higher-order component that protects routes from unauthenticated access.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sureshbabu170302/React-Js-Projects.git
   ```
3. Navigate to the project directory:
   ```bash
   cd worldwise

4. Install dependencies:
   ```bash
   npm install
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Run a JSON server (for cities API):
   ```bash
   npm run server
   ```

## Usage

1. Navigate to the homepage to view the cities list.
2. Use the login form to authenticate with the fake credentials:
   ```
   Email: suresh@example.com
   Password: suresh@02
   ```

3. Once logged in, you can add, view, and delete cities.

## Project Features

- **City Management**: You can view, create, and delete cities.
- **Authentication**: Users can log in using the provided credentials and access protected routes.
- **Routing**: The project uses protected routes to ensure only authenticated users can access certain pages.

## Credits

Developed by Suresh using React, React Router, Context API, and JSON server for cities management.
