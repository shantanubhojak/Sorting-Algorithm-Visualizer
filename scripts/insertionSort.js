// visualize single element
// i = index, height = height of Element, color = background color of element
function visElement(i, height, color){
    setTimeout(() => {
    divs[i].style = "height:"+height+"%; background-color:"+color+"; width:"+width+"%;";
    }, currentDelay);
}

function insertionSort(){
    for(let i=0; i<size; i++){
        visArrow(i,1,1);
        if(div_sizes[i]<div_sizes[i-1] && i!=0){
            let j=i-1;
            let k=i;
            while(div_sizes[j]>div_sizes[k]){
                // selection of unsorted element
                visElement(k,div_sizes[k], "cyan");
                // currentDelay incremented to visulize swapping of element as well as changing arrow positon
                currentDelay+=delay;
                
                swap(j,k);

                // swaping elements
                visElement(j, div_sizes[j], "cyan");
                visElement(k, div_sizes[k], "green");

                // removing arrow from prvious place
                visArrow(k,0,0);

                j--;
                k--;

                // changing position of arrow
                visArrow(k,1,0);
            }

            currentDelay+=delay
            // changing color of element which is now sorted
            visElement(k, div_sizes[k], "green")
            // removing arrow from pointing element
            visArrow(k, 0, 1)
        }

        visElement(i, div_sizes[i], "green")
        visArrow(i,0)
    }
}