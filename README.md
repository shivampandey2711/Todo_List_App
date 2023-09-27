# Todo List App with User Authentication

This web application allows users to create and manage their todo lists. Users can sign up for an account, log in, and perform various task management operations.

## Features

- User Registration (Signup) and Login
- Task Creation, Editing, Completion, and Deletion
- Logout
- User Authentication State Management
- User-Specific Data Storage
- Error Handling

### Bonus Features (Implemented)

- Due Dates for Tasks
- Task Prioritization (e.g., high, medium, low)
- Task Filtering (completed and active)
- Task Sorting (by due date or priority)

## Authentication Flow

1. **User Registration (Signup):**

   - Users can sign up for an account by providing a unique username and password.
   - The provided credentials are validated to ensure uniqueness.
   - Upon successful registration, users are logged in automatically.

2. **User Login:**

   - Users can log in with their username and password.
   - The provided credentials are validated for correctness.
   - Upon successful login, users are granted access to their todo list.

3. **Task Management:**

   - Users can create new tasks, edit existing tasks, mark tasks as completed, and delete tasks.
   - All tasks are associated with the logged-in user.
   - Task data is stored in local storage, ensuring persistence across page refreshes.

4. **Logout:**

   - Users can log out of their accounts, which terminates their session.

## Security Measures

### User Authentication and Session Management:

- User passwords are securely hashed and stored.
- Passwords are validated during login using the hashed values.
- User sessions are managed using React state.
- Protected routes ensure that only authenticated users can access certain parts of the application (e.g., the todo list).

### User-Specific Data:

- Each user can only access and manage their own tasks.
- Task data is separated and stored in local storage based on the user's username.

### Error Handling:

- User-friendly error messages are displayed for scenarios such as incorrect login credentials.
- Errors are cleared upon successful login or logout.

### Bonus Features (Implemented):

- Due dates for tasks and task prioritization can be added for enhanced task management.

## Usage

To run the application, follow these steps:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Access the application in your web browser at `http://localhost:3000`.

## Author

Shivam Pandey
