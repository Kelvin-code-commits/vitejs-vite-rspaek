### Task Management App with `useState` Hook 📝

#### Task:

Write a small React application that allows users to manage tasks using `useState`.

#### Instructions:

1. **Create a `TaskManager` Component:**

   - Use `useState` to manage a list of tasks. Each task should have a name.
   - **File to Create:** `TaskManager.jsx`

2. **TaskList Component:**

   - Create a component named `TaskList` that displays all the tasks.
   - **File to Create:** `TaskList.jsx`

3. **AddTask Component:**

   - Create a component named `AddTask` that allows users to add a new task to the list.
   - Use an input field to capture the task name, and a button to submit the task.
   - When the button is clicked, the new task is added to the task list.
   - **File to Create:** `AddTask.jsx`

4. **App Component:**

   - Render the `TaskManager` component inside the `App` component.
   - Inside the `TaskManager`, render both the `TaskList` and `AddTask` components.
   - **File to Create:** `App.jsx`

#### Expected Interactions:

1. **AddTask Component:**

   - **Input Field:** Users can type the name of a new task into an input field.
   - **Add Button:** When the "Add Task" button is clicked:
     - The new task is added to the task list.
     - The `TaskList` component updates to reflect the new task.

2. **TaskList Component:**

   - **Task Display:** This component displays all tasks added by the user.

3. **TaskManager Component:**

   - **State Management:** This component holds the state for the list of tasks, and it passes down the necessary handlers to `TaskList` and `AddTask` to add tasks.
