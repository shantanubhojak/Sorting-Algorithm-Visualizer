// delay time for every visulization
var currentDelay = 0;

// bubble sort algorithm
function bubbleSort(){
    for(let i=0; i<size; i++){
        for(let j=0; j<size-1-i; j++){
            // changing color for selecting divs
            visSelect(j, div_sizes[j], div_sizes[j+1], "#2e00ff", "purple", 1);
            
            if(div_sizes[j]>div_sizes[j+1]){
                if(div_sizes[j]>div_sizes[j+1]){
                    // changing color if swap required
                    visSelect(j, div_sizes[j], div_sizes[j+1], "#00ffee", "#00ffee", 1);
                    swap(j, j+1);
                    // changing height
                    visSelect(j, div_sizes[j], div_sizes[j+1], "#00ffee", "#00ffee", 1);
                }
            }
            
            // unselecting divs
            visSelect(j, div_sizes[j], div_sizes[j+1], "red", "red", 0);
        }

        // changing color of sorted element
        visSorted(size-1-i, div_sizes[size-1-i], "rgb(0 255 14)")
    }
}


// visulization functions
function visSelect(i, height1, height2, color1, color2, incd){
    setTimeout(() => {
        divs[i].style = "height:"+height1+"%; background-color:"+color1+"; width:"+width+"%;";
        divs[i+1].style = "height:"+height2+"%; background-color:"+color2+"; width:"+width+"%;";
    }, currentDelay);
    if(incd==1)
        currentDelay+=delay;
}

function visSorted(i, height, color){
    setTimeout(() => {        
        divs[i].style = "height:"+height+"%; background-color:"+color+"; width:"+width+"%;";
    }, currentDelay);
}