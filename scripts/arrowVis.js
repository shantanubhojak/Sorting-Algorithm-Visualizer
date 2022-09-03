var arrowsContainer = document.getElementById("arrows");
var arrows;
var iamarrow = "<b>↑</b>";

// enable arrows in DOM
function enableArrows(){
    arrowsContainer.style.display = "flex";
}

// create divs in in arrows
function createArrows(){
    arrowsContainer.innerHTML = "";
    for(let i = 0; i<size; i++){
        let div = document.createElement("div");
        div.innerHTML = ``;
        div.className = "arrow";
        div.style = "width:"+width+"%; height:100%; font-size:25px;";
        arrowsContainer.appendChild(div);
    }
    arrows = document.querySelectorAll(".arrow")
} 

// i = postiton of arrowDisplay, on = 1 (if want to dispaly), 0 (if not)
function arrowDisplay(i, on){
    if(on==1)
    arrows[i].innerHTML = iamarrow;
    else
    arrows[i].innerHTML = "";
}

// function for visualizing arrow
// i = postiton of arrowDisplay, on = 1 (if want to dispaly), 0 (if not), d = 1(if want delay in next time), 0(if not)
// i and on will be passed in arrowDisplay() function
function visArrow(i, on, d){
    setTimeout(() => {
        arrowDisplay(i, on);
    }, currentDelay);
    if(d==1)
        currentDelay += delay;
}
