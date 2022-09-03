var sortAlgo = "Bubble";                                   // default sorting algorithm
let algoButton = document.getElementById("Bubble");
algoButton.classList.add("active");

function selectAlgo(algo){
    
    // toggeling button active
    algoButton.classList.remove("active");
    algoButton = document.getElementById(algo);
    algoButton.classList.add("active");

    sortAlgo = algo;   
    if(sortAlgo == "Insertion" || sortAlgo == "Selection"){
        createArrows();
        enableArrows();
    }
    if(sortAlgo == "Merge"){
        // document.body.style.gridTemplateRows = grid2;
    }
}

function sort(){
    // diabling all buttons while sorting
    disable();

    // reseting color to red
    resetColor("#ff0034")
    currentDelay = 0;
    
    if(sortAlgo=="Bubble")
        bubbleSort();
    else if(sortAlgo == "Insertion")
        insertionSort();
    else if(sortAlgo == "Selection")
        selectionSort();
    else if(sortAlgo == "Merge"){

        MergeSort(0, size-1);
    }
    
    // enabling all buttons after sorting is done
    setTimeout(() => {
        activate();
    }, currentDelay);
}
