let peopleCount = document.getElementById("peopleCount");
let saved = document.getElementById("afterSave");
let savedText = "";
let count = 0;
function increment(){
    count = count+1;
    console.log(count);
    peopleCount.textContent= count;
}

function save(){
    savedText = count + " - ";
    saved.textContent += savedText;
    peopleCount.textContent = 0;
    count = 0;
}