# Quiz App

## Description

This is a React-based Quiz Application that allows users to answer multiple-choice questions. The app features a timer, tracks progress, calculates points, and saves the highest score.

## Features

- **Multiple Choice Questions**: Users answer a series of questions.
- **Progress Tracking**: Displays the number of questions answered and points scored.
- **Timer**: Each question has a time limit (default: 30 seconds).
- **Points Calculation**: Users earn points based on correct answers.
- **Highscore**: The highest score is saved even after restarting the quiz.
- **Restart Functionality**: Users can restart the quiz at any point.

## Project Structure

- `App.js`: Main component that manages the app's state and functionality.
- `Header.js`: Component to display the app's header.
- `Main.js`: Layout component that wraps the quiz content.
- `Loader.js`: Displays a loading screen while fetching the questions.
- `Error.js`: Error message component when fetching questions fails.
- `StartScreen.js`: Component to start the quiz.
- `Questions.js`: Renders the quiz questions and handles user input.
- `NextButton.js`: Button to move to the next question.
- `Progress.js`: Displays current progress in the quiz.
- `FinishScreen.js`: Shows the final score and high score at the end of the quiz.
- `Footer.js`: Displays the timer and the "Next Question" button.
- `Timer.js`: Handles the countdown for each question.

## State Management

The application uses the `useReducer` hook for state management. The following actions are handled:

- `dataReceived`: Triggered when the questions are fetched successfully.
- `dataFailed`: Triggered if there's an error while fetching questions.
- `start`: Starts the quiz and sets the initial timer.
- `newAnswer`: Updates the points based on the user's answer.
- `nextQuestion`: Moves to the next question.
- `finish`: Ends the quiz and compares the score to the high score.
- `restart`: Resets the quiz while keeping the high score.
- `timer`: Decreases the remaining time and finishes the quiz if time runs out.

## Installation

1. Clone the repository
   ```
   git clone https://github.com/sureshbabu170302/React-Js-Projects.git
   ```
2. Navigate to Project
   ```
   cd react-quiz
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Run the application
   ```
   npm start
   ```
