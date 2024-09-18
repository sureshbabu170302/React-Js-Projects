# Atomic Blog

The **Atomic Blog** is a dynamic React application that allows users to manage a list of "atomic posts". The app includes features like creating, searching, and managing posts, toggling between light and dark modes, and displaying archived posts from a large post archive.

## Features

- 🌙 **Dark Mode**: Toggle between light and dark themes using a button.
- 📜 **Search Functionality**: Search through the posts by title or body.
- 📦 **Post Management**: Add new posts or clear all current posts.
- 📂 **Archive**: View a large archive of 10,000 posts and add them as new posts.

## Technologies Used

- **React**: For building the user interface.
- **Context API**: For managing global state (posts, search query).
- **Faker.js**: To generate random posts with unique titles and bodies.

## Folder Structure

```
atomic-blog/
│
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   │── PostContext.js
│   ├── App.js
│   |── index.js
|   |── Test.js
├── package.json
└── README.md
```

## How to Run This Project

1. Clone the repository:
   ```bash
   git clone https://github.com/sureshbabu170302/React-Js-Projects.git
   ```
2. Navigate to the project directory:
   ```bash
   cd atomic-blog
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000` to view the app.

## App Functionality Overview

### 1. **Dark Mode Toggle**

- Button to toggle between light and dark modes.
- Utilizes the `isFakeDark` state to manage theme changes.

### 2. **Post Context (PostContext.js)**

- `PostContext` provides global state management for posts and search queries.
- Posts are dynamically generated using **Faker.js**.
- Includes context functions to **add new posts**, **search posts**, and **clear all posts**.

### 3. **Header**

- Displays the title of the blog.
- Includes a search input field to filter posts by title or body content.
- Displays the total number of posts found and a button to clear all posts.

### 4. **Main Section**

- The main content includes a form to add new posts and a list of posts.
- Posts are rendered as a list with a title and body content.

### 5. **Archive**

- Archive section displays a list of 10,000 posts.
- Option to add archive posts to the current list as new posts.

## Future Improvements

- Add a pagination system for the post archive.
- Implement more advanced filtering options.
- Persist posts and theme settings across sessions using local storage.
