//options for github include 
// 1. creating a repo(folder) with a ReadMe on github and git cloning it down
    //github will make the initial commit for you as long as a file(ReadMe) is created
    //once changes are made, git add, git commit(with message) and git push
// 2. Create folder on computer (mkdir) and push up to github
    //cd in to the folder you just created
    //run git init to create a git repo(.git) 
    //run git add and git commit
    //create an EMPTY (no ReadMe) folder on github where the folder will be pushed to
    //run git remote add origin(new name for the url of the repo) <name of place where the repo is going>
        //e.g. git remote add origin https://github.com/gvorvik/sample-project
    //git remote -v shows where the folder is pointing to on github (for pushing and fetching)
    //git push -u origin master

//option + click creates another cursor, so you can type same thing in multiple places

$(document).ready(onReady);
let counter = 0;  

function onReady() {
    $('body').append(`<button class="block" id='countingButton'>Click Me</button>`);
    $('body').append(`<h3 id='buttonCounter'>The button has been clicked ${counter} times</h3>`);
    $('#countingButton').on('click', clickHandler);
    $('#submitButton').on('click', addNewCreature);
}

function clickHandler() {  
    counter ++;
    $('#buttonCounter').text(`The button has been clicked ${counter} times`);
}

function addNewCreature() {
    let name = $('#creatureNameInput');
    let size = $('#creatureSizeInput');
    let speed = $('#creatureSpeedInput');
    let weight = $('#creatureWeightInput');
    $("#tableBody").prepend(`<tr>
        <td>${name.val()}</td>
        <td>${size.val()}</td>
        <td>${speed.val()} MPH</td>
        <td>${weight.val()} pounds</td>
        </tr>`);
    name.val('');
    size.val('');
    speed.val('');
    weight.val('');
}