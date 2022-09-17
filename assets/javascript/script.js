var tasks = [];

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"))

    if (!tasks) {
        tasks = [{
            task: "",
            taskIndex: ""
        }]
    };

    for (var i = 0; i < tasks.length; i++) {
        if (!tasks[i]) {
            tasks[i] = {
                task: "",
                taskIndex: "",
            };
        };
    };

    tasks.forEach(function(task) {
        addTask(task.taskIndex, task.task)
    });
    console.log(tasks)
};

var addTask = function(taskIndex, taskText) {
    $("#index-" + taskIndex).find(".taskInput").text(taskText);
}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


$(".saveBtn").on("click", function() {
    var textArea = $(this).closest(".time-block").find(".taskInput")

    var taskInput = textArea.val().trim();

    var index = $(this).closest(".time-block").index();
    
    var taskIndex = $(this).closest(".time-block").attr("id").replace("index-", "")
    console.log(taskIndex)

    var taskObj = {
        task: taskInput,
        taskIndex: taskIndex
    } 

    tasks[index] = taskObj;
    saveTasks();
});


var currentDayP = $("#currentDay");
var currentDay = moment();

currentDayP.text(currentDay.format("MMMM Do YYYY"));

var currentTime = moment().hour();

var dueTimeStyle = function() {

    $(".taskInput").each(function() {
         if($(this).attr("id") < currentTime) {
            $(this).addClass("past")
        } else if($(this).attr("id") > currentTime) {
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
    });
};

setInterval(dueTimeStyle, (1000 * 60) * 10);


var timeReset = function() {
    localStorage.clear();
}

if (currentTime > 23) {
    timeReset()
}

dueTimeStyle()
loadTasks()




