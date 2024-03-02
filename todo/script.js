document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', function() {
      var task = taskInput.value.trim();
  
      if (task !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = task;
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
        
        deleteButton.addEventListener('click', function() {
          listItem.remove();
        });
      }
    });
  });
  