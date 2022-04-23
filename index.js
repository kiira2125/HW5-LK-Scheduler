//you can call out special non milatary time using this format below which I wont but keep for record only
//var hours =[""]
// going to create a function for time blocks
function makeTblocks(hour, _currentTodo = ""){
    var crntHour = new Date().getHours() -1;
    var ppOrF = "future";
// adding some logic for past, present and future
    if (crntHour > hour + 7) ppOrF = "past";
    // creating if statements for time
    if(crntHour=== hour + 7) ppOrF = "present";
// my hours and current todo for localstorage.getit for my hourNam
    var hourNam = hour;
    var currentTodo = localStorage.getItem(hourNam);
    //if(!currentTodo)currentTodo = ""; this was something Allec mention nice 
    console.log("Todo List is Save for", hourNam, currentTodo);
    // adding jqurey professor Chad taught us but love VJS
    $(".box").append($(`
    <div class= "row time-blocks"> 
        <div class=" hours col-1">7AM</div>
        <textarea name="" id="" cols="30" rows="5" class= "description cols-7"> ${ppOrF}">
        ${currentTodo || ""}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`)
);
// need to create code for saving to local storage, click eventlistener for each block
// nedd to make sure when app loads it will grap all current todo to show
};
// going for a Vanilla JS
for (var i = 7; i<17; i++){
    makeTblocks(i);
};
// click button for the save buttons
var savBtn = document.querySelectorAll(".savBtn"); // querySelector only calls out first element that matches the slector but not all
//console.log(savBtn[0]);
alert("Schedule Saved! O_o");
// need a for loop to generate the save click button individually not at the same time.
for(var i = 0; i<savBtn.length; i++){
savBtn[i].addEventListener("click", handleClickOnSavBtn);
};  


function handleClickOnSavBtn(event) {
//logic to what button i ckick and gets the info save and store on local storage
alert ("saved O_o");
//console.log("My ToDo List ----", event.target.parentNode.children[1].value);
//console.dir(event.target);

var todoValue = (event.target.parentNode.children[1].value);
var todoKey = (event.target.parentNode.children[1].value).id;
console.log("key value", todoKey, todoValue);
//save key vaule set to local Storage all the ToDo list   saveText( JSON.stringify(obj), "filename.json" );
//I also need to be able to save and load when you start the app
localStorage.setItem(todoKey, todoValue);

};

//var today = new Time();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date+' '+time;Current Date & Time Both in JavaScript;

