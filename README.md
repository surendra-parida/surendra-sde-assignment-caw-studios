# Todo App with State Management and Unit Testing

This is a simple Todo App built using **React**. It allows users to add, edit, delete tasks, toggle task completion, and filter tasks by their status (`All`, `Completed`, or `Pending`). The application also persists tasks using **localStorage** to ensure tasks are saved across page reloads. Unit tests are written using **Jest** and **React Testing Library**.

## Features

- **Add Tasks**: Users can add new tasks by entering text and clicking the "Add Task" button.
- **Edit Tasks**: Existing tasks can be edited.
- **Delete Tasks**: Users can delete tasks from the list.
- **Task Completion**: Tasks can be marked as completed by checking a checkbox.
- **Filter Tasks**: Users can filter tasks to view:
  - All tasks
  - Completed tasks
  - Pending (incomplete) tasks
- **Persisting Data**: Tasks are saved in the browser's local storage and remain after a page reload.

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system. You can download them from [here](https://nodejs.org/).

### Installation

1. **Clone the repository**:
2. **Install dependencies**:
    npm install
3. **Run the app locally**:
    npm start
4. **Running Tests**:
    npm test


**Test Coverage**
The tests cover the following functionality:

Adding tasks
Editing tasks
Deleting tasks
Toggling task completion
Filtering tasks (All, Completed, Pending)

**Technologies Used**
React: For building the user interface.
Jest: For unit testing.
React Testing Library: For testing React components.
localStorage: To persist tasks across page reloads.
