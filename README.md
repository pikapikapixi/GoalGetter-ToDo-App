# GoalGetter To-Do App

![Imagen de WhatsApp 2023-09-02 a las 13 42 20](https://github.com/pikapikapixi/GoalGetter-ToDo-App/assets/135671082/00458f26-3c08-4c78-92ae-716782fb55dd)


# JavaScript Task Manager

This is a simple JavaScript code for a task manager application. It utilizes jQuery and AJAX to interact with a JSON server and perform CRUD operations on tasks.

## Getting Started

To run this application locally, follow the steps below:

1. Clone the repository to your local machine.

2. Install any server of your choice or use a JSON server. Make sure the server is running on `http://localhost:5000/`.

3. Open the `index.html` file in your web browser.

4. You can now perform various operations such as fetching tasks, adding a new task, deleting a task, and downloading tasks as a JSON file.

## Functionality

### Fetch Tasks

The `fetchTasks` function retrieves tasks from the JSON server using an AJAX GET request. It checks if the response is an array and then displays the tasks in the task list.

### Display Tasks

The `displayTasks` function takes an array of tasks and dynamically generates HTML elements to display each task in the task list. Each task item includes a title and a delete button.

### Add New Task

The `addTaskForm` form submission event handler listens for the form submission and prevents the default form behavior. It retrieves the task title from the input field, sends a POST request to the server to add the task, clears the input field, and fetches the updated task list.

### Delete Task

The `delete-btn` click event handler listens for the click on the delete button of a task item. It retrieves the task ID from the data attribute of the task item, confirms the deletion with the user, sends a DELETE request to the server to delete the task, and fetches the updated task list.

### Download Tasks

The `downloadTasks` function retrieves tasks from the server using an AJAX GET request. If the response is an array, it converts the tasks to a JSON string, creates a JSON file, and initiates a file download.

## Dependencies

This application requires jQuery library to be included.

html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


## License

This project is licensed under the [MIT License](LICENSE).

Feel free to modify and use the code as per your requirements.
