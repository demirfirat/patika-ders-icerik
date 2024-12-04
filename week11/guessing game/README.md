# Guessing Game Project 🎮
This project is a simple and fun guessing game where users try to answer the given questions. For each question, the user builds the correct answer by selecting the appropriate letters. Feedback is provided for both correct and incorrect answers.

## Features 
- Dynamic questions and answers are loaded from the data.js file.
- Each question displays an ID along with its text.
- Users select letters to form the correct answer.
- When the correct answer is given, the game moves to the next question.
- Incorrect answers trigger a visual warning.
- Once all questions are answered, a "Questions Finished 🥳" message is displayed.

## Technologies Used 
- **React**: For building the user interface.
- **CSS**: For styling and layout.
- **JavaScript**: For implementing game logic.

## Project Structure
- src/App.js: Contains the main game logic.
- src/data.js: Stores the questions and answers.
- src/App.css: Contains the styling for the project.

### How to Play
1. When the application starts, a question and randomly shuffled letters are displayed.
2. The user selects letters to form the correct answer.
3. If the selected letters form an incorrect answer, a red warning line appears.
4. Upon selecting the correct answer, the game proceeds to the next question.
5. When all questions are completed, the game ends with a success message.
