
// Get all task checkboxes from HTML

const taskCheckboxes = document.querySelectorAll(".task-checkbox");


// Get the dashboard statistics elements

const completedTasksElement = document.getElementById("completedTasks");

const dailyProgressElement = document.getElementById("dailyProgress");


// Function to update dashboard statistics

function updateProgress() {

    // Count total tasks

    const totalTasks = taskCheckboxes.length;


    // Count completed tasks

    let completedTasks = 0;

    taskCheckboxes.forEach(function(task) {

        if (task.checked) {
            completedTasks++;
        }

        // Add or remove completed styling

        const taskRow = task.closest(".task");

        taskRow.classList.toggle("completed", task.checked);

    });


    // Calculate progress percentage

    const progress = Math.round(
        (completedTasks / totalTasks) * 100
    );


    // Update dashboard numbers

    completedTasksElement.textContent = completedTasks;

    dailyProgressElement.textContent = progress + "%";

}


// Listen for checkbox changes

taskCheckboxes.forEach(function(task) {

    task.addEventListener("change", updateProgress);

});


// Run once when the website opens

updateProgress();
