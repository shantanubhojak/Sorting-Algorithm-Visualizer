function selectionSort(){
    for(let i=0; i<size; i++){
        let min = i;
        visArrow(i, 1, 1);
        visArrow(i, 0, 0);
        for(let j=i+1; j<size; j++){
            visElement(min, div_sizes[min], "cyan")
            visArrow(j, 1, 1);
            if(div_sizes[j]<div_sizes[min]){
                currentDelay+=100;
                visElement(min, div_sizes[min], "#ff0034")
                currentDelay+=delay/2;
                min = j;                
            }
            visArrow(j, 0, 0);
        }
        visArrow(i, 1, 0);
        swap(min, i);
        currentDelay+=delay;
        visElement(min, div_sizes[min], "#ff0034");
        visElement(i, div_sizes[i], "green");
        currentDelay+=delay;
        visArrow(i, 0, 1);
    }
}