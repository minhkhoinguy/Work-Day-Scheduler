//display time
var time = moment().format('LLL');
$("#currentDay").text(time);


//locally stored data
var todos = document.getElementById("todo");
var saveButton = document.getElementById('save');

function saveSchedule() {

    var schedule = {
      todos: todos.value.trim()
    };

    localStorage.setItem("schedule", JSON.stringify(schedule));
    saveButton.addEventListener("click", function(event) {
        event.preventDefault();
        saveSchedule();
    });
}

