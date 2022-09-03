var size_in = document.getElementById("size");
size_in.addEventListener("input", setSize);

// for delay size input
var speed_in= document.getElementById("speed");
speed.addEventListener("input", setSpeed);

var size = size_in.value;
var div_sizes = [];                                            //stores divs heights
var divs = [];                                                 //stores created divs
var container = document.getElementById("div-container");      //points to the container where divs will create
var delay = Number(speed_in.max) - Number(speed_in.value) + 1;


// setting widths of created divs
let width = container.offsetWidth/size;

generateArray();                                               //generates Array
// createArrows();



// setters
function setSize(){
    // sets size of array                                             
    size = size_in.value;
    width = container.offsetWidth/size;
    generateArray();
    createArrows();
}
function setSpeed(){
    // sets delay time
    delay = Number(speed_in.max) - Number(speed_in.value);
    if(delay==0){
        delay = 50
    }
}

function generateArray(){
    for(let i=0; i<size; i++){
        div_sizes[i] = Math.floor((Math.random() *80) + 1)+5;
    }
    div_sizes = div_sizes.slice(0, size);
    createDivs();
}

function createDivs(){
    // clearing content of divs container
    container.innerHTML ="";

    // creating divs
    for(let i=0; i<size; i++){
        let div = document.createElement("div")
        div.innerHTML = "";
        div.className = "created";
        div.style = "width:"+width+"%; height:"+div_sizes[i]+"%;";
        container.appendChild(div);
    }

    // array of all created divs   
    divs = document.querySelectorAll(".created");
}

// swap function used by all sorting algorithms
function swap(i, j){
    let temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;
}


// function related to dom
// blocking DOM while sorting is happening
var btns = document.getElementsByClassName("btn");

function disable(){
    for(let i=0; i<btns.length; i++){
        btns[i].disabled = true;
    }
    size_in.disabled = true;
    speed_in.disabled = true;
}

function activate(){
    for(let i=0; i<btns.length; i++){
        btns[i].disabled = false;
    }
    size_in.disabled = false;
    speed_in.disabled = false;
}


function resetColor(color){
    for(let i=0; i<divs.length; i++){
        divs[i].style.backgroundColor = color;
    }
}