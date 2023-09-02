$(document).ready(function() {
  const endpoint = 'http://localhost:3000/tasks/';

  // Fetch tasks from JSON Server
  function fetchTasks() {
    $.ajax({
      url: endpoint,
      method: 'GET',
      success: function(response) {
        if (Array.isArray(response)) { // Check if response is an array
          displayTasks(response);
        } else {
          console.log('Error: Invalid response format');
        }
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  }

  // Display tasks in the task list
  function displayTasks(tasks) {
    let taskList = $('#taskList');
    taskList.empty();

    tasks.forEach(function(task) {
      let listItem = `
        <li class="list-group-item task-item" data-id="${task.id}">
          <span>${task.title}</span>
          <div>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
          </div>
        </li>
      `;

      taskList.append(listItem);
    });
  }

  // Add new task
  $('#addTaskForm').submit(function(event) {
    event.preventDefault();

    let taskInput = $('#taskInput');
    let taskTitle = taskInput.val().trim();

    if (taskTitle !== '') {
      $.ajax({
        url: endpoint,
        method: 'POST',
        data: { title: taskTitle },
        success: function(response) {
          taskInput.val('');
          fetchTasks();
        },
        error: function(error) {
          console.log('Error:', error);
        }
      });
    }
  });

  // Delete task
  $('#taskList').on('click', '.delete-btn', function() {
    let taskItem = $(this).closest('.task-item');
    let taskId = taskItem.data('id');

    if (confirm('Are you sure you want to delete this task?')) {
      $.ajax({
        url: `${endpoint}/${taskId}`,
        method: 'DELETE',
        success: function(response) {
          fetchTasks();
        },
        error: function(error) {
          console.log('Error:', error);
        }
      });
    }
  });

  // Download tasks as a JSON file
  function downloadTasks() {
    $.ajax({
      url: endpoint,
      method: 'GET',
      success: function(response) {
        if (Array.isArray(response)) { // Check if response is an array
          const jsonContent = JSON.stringify(response, null, 2);
          const blob = new Blob([jsonContent], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'tasks.json';
          link.click();
          URL.revokeObjectURL(url);
        } else {
          console.log('Error: Invalid response format');
        }
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  }

  // Handle download button click
  $('#downloadButton').on('click', function() {
    downloadTasks();
  });

  // Fetch and display tasks on page load
  fetchTasks();
});