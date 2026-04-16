🎮 Simon Says Game
📌 Project Overview

This project is a web-based version of the classic Simon Says game developed using HTML, CSS, and JavaScript. The game challenges players to memorize and repeat an increasingly long sequence of colors and sounds. Each round adds a new step to the sequence, testing the player’s memory and attention. If the player makes a mistake, the game ends and resets.

🎯 Features
Four interactive colored pads
Unique sound for each pad
Random sequence generation
Visual flashing effect
User input tracking
Increasing difficulty each round
Game-over detection and reset functionality
🧠 Game Logic & Functions
Core Functions
startGame()
Initializes the game, resets variables, and starts the first round
nextRound()
Adds a new random step to the sequence and plays it
playSequence()
Iterates through the sequence and displays it to the player
flashButton(button)
Visually highlights a button during playback
playTone(button)
Plays the corresponding sound for each button
handleUserClick(button)
Records user input and checks it against the sequence
checkUserInput()
Compares the player’s input to the generated sequence
endGame()
Stops the game and displays a failure state
resetGame()
Clears all game data and prepares for a new game
🔢 Algorithms & Coding Choices
Random sequence generation using arrays
State management with separate arrays for game pattern and user input
Step-by-step comparison of user input vs. game sequence
Timing control using setTimeout() for sequence playback
Modular function design for readability and easier debugging
🛠 Implementation Plan
HTML Structure
Create layout with title, game board, and buttons
Add start/reset controls
CSS Styling
Design four distinct colored pads
Add hover and active states
Ensure responsive layout
JavaScript Functionality
Add event listeners for user interaction
Implement sequence generation and playback
Build logic for matching and progression
Testing & Debugging
Verify sequence playback timing
Test win/loss conditions
Ensure proper reset behavior
⚖️ Trade-Offs
Focused on core functionality over advanced features (e.g., scoring, difficulty modes)
Chose simple, readable code instead of complex optimizations
Limited animations to ensure stable and predictable gameplay
🧩 Challenges & Debugging
Challenges
Controlling timing of sequence playback
Preventing user input during playback
Managing game state correctly
Resetting the game after failure
Debugging Solutions
Disabled input during playback using a boolean flag
Cleared arrays and reset variables on game over
Ensured correct mapping between buttons and sounds
Compared user input incrementally after each click
🤖 AI & Development Tools Used
ChatGPT
Assisted with planning game structure and logic
Helped debug JavaScript issues
Provided guidance on organizing functions
Supported documentation and README creation
Replit
Used as the primary development environment
Allowed real-time coding, testing, and debugging
Made it easy to quickly preview changes and troubleshoot issues
YouTube (Educational Resources)
Used to reinforce understanding of JavaScript concepts
Provided visual walkthroughs for game logic and DOM manipulation
Helped clarify concepts such as event handling and timing functions
Justification

These tools were used to support learning, improve efficiency, and troubleshoot issues throughout development. ChatGPT helped with structuring and debugging, Replit provided a convenient coding environment, and YouTube offered visual explanations to reinforce key programming concepts. While these tools were helpful, all implementation, testing, and problem-solving required hands-on effort and understanding.

📝 Reflection

This project strengthened my ability to manage state, handle user interactions, and build interactive web applications. I gained experience with arrays, event listeners, and timing functions. Debugging challenges helped deepen my understanding of JavaScript logic and application flow.

📊 Project Summary

This project involved building a browser-based Simon Says game using HTML, CSS, and JavaScript. The goal was to create an interactive memory game where users repeat an increasingly complex sequence of colors and sounds. I implemented features such as random sequence generation, user input validation, and game progression logic. Challenges included managing timing, preventing user interaction during playback, and ensuring accurate sequence comparison. I prioritized clear, maintainable code and focused on core gameplay functionality. AI tools supported debugging and planning but did not replace hands-on development. Overall, this project improved my understanding of DOM manipulation, event handling, and state management in JavaScript.

🚀 Future Improvements
Add difficulty levels
Implement scoring system
Add strict mode (instant reset on error)
Improve animations and sound effects
Track and store high scores
🔗 Author

Developed as part of the Thinkful Game Studio internship project.
