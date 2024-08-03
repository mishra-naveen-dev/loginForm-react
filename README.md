# React Login Form with Loading Screen

## Overview

This project is a React-based login form that features a modern, responsive design and a pre-loading screen with a bouncing balls animation. The form includes social login options, email and password input fields, and a "Forgot Password" link. The project demonstrates the use of React for building interactive user interfaces, CSS for styling, and JavaScript for functionality.

## Features

1. **Loading Screen**:

   - **Bouncing Balls Animation**: A loading screen that displays three bouncing balls, providing a smooth visual effect while the main content loads.
   - **Loading Duration**: The loading screen is displayed for 30-35 seconds before revealing the login form.

2. **Login Form**:
   - **Social Login**: Buttons for logging in with social media accounts, featuring custom icons.
   - **Email and Password Fields**: Input fields for email and password, each with corresponding icons.
   - **Responsive Design**: The layout adapts to various screen sizes, ensuring usability on desktops, tablets, and mobile devices.
   - **Password Recovery**: A "Forgot Password" link for users to reset their password.
   - **Signup Prompt**: A message prompting users without an account to sign up.

## File Structure

- **src/components**: Contains reusable React components.
  - **SocialLogin.js**: Component for social login buttons.
  - **InputField.js**: Component for input fields with icons.
  - **Loading.js**: Component for the loading screen animation.
- **src/assets/images**: Contains image assets used in the project.
- **index.css**: Contains global styles and responsive design rules.

## Implementation Details

1. **App Component**:

   - Manages the state of the loading screen using `useState` and `useEffect`.
   - Renders the `Loading` component initially, and switches to the login form after the specified loading duration.

2. **Loading Component**:

   - Displays a loading animation with three bouncing balls.
   - Uses CSS keyframes for the bounce animation.

3. **SocialLogin Component**:

   - Renders social login buttons with icons.
   - Imports and uses images stored in the assets folder.

4. **InputField Component**:
   - Renders an input field with an associated icon.
   - Supports different input types (e.g., email, password).

## Styles and Responsive Design

- **Global Styles**: Basic reset and font settings.
- **Container Styles**: Centered and styled login form container with a translucent background and shadow.
- **Responsive Breakpoints**: Media queries to adjust the layout and padding for different screen sizes, ensuring the form is user-friendly on all devices.

## Snapshot

Here is a snapshot of the project:

## ![Loading Form Snapshot](./src/assets/image/snapshot/Screenshot%202024-08-03%20100325.png)

![Login Form Snapshot](./src/assets/image/snapshot/Screenshot%202024-08-03%20100400.png)

## Usage

1. **Clone the Repository**: Download or clone the project repository to your local machine.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install required dependencies.
3. **Run the Project**: Use `npm start` to launch the development server and view the application in your browser.

## Conclusion

This project showcases the integration of React components with CSS animations and responsive design principles. It provides a functional and visually appealing login form, demonstrating best practices in modern web development.
