# Timer Challenge React App 🕒 

Welcome to the Timer Challenge React App! This project is a fun and interactive challenge where users must stop a countdown timer as close to the target time as possible to score points. The closer you stop the timer to the target time, the higher your score!

## Features

- **Four Difficulty Levels:**
  - **Easy:** 1 second countdown
  - **Not Easy:** 5 seconds countdown
  - **Getting Tough:** 10 seconds countdown
  - **Pros Only:** 15 seconds countdown

- **Scoring System:** 
  - Points are awarded based on how close you stop the timer to the target time. The closer you are, the higher your score!

- **Lose Condition:**
  - If you fail to stop the timer before it finishes counting down, you lose the challenge.


## How It Works

1. **Choose a Difficulty Level:** Select from Easy, Not Easy, Getting Tough, or Pros Only.
2. **Start the Timer:** Click the start button to begin the countdown.
3. **Stop the Timer:** Try to stop the timer as close to 0 as possible. Your score will be calculated based on your accuracy.
4. **Try Again:** Restart the challenge and try to beat your previous score!

## Technologies Used

This project was developed as a practice to get hands-on experience with the following React concepts:

- **`forwardRef` and `useImperativeHandle`:** These are used to expose methods to parent components, enabling better control over child components.
- **`useRef`:** Utilized to directly interact with DOM elements and persist values across renders without causing re-renders.
- **`createPortal`:** Used for rendering child components into a DOM node that exists outside the DOM hierarchy of the parent component.
- **`useState`:** Essential for managing state within functional components.

