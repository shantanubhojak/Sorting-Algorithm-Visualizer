// used for changing colour of single element
function changeColor(i, color){
    divs[i].style.color = color;
}

// used to select a range of elemets
// basically it change color of elements from i to j
function mergeSelect(i, j, color){
    setTimeout(() => {
        for(let k=i; k<=j; k++){
            // console.log(k);
            divs[k].style.backgroundColor = color;
        }
    }, currentDelay);
    currentDelay+=delay;
}

// it changes height
function mergeHeight(i, height, color, incd){
    setTimeout(() => {
        divs[i].style.height = height+"%";
        divs[i].style.backgroundColor = color;
    }, currentDelay);
    if(incd==1)
        currentDelay+=50;
}

function merge(l, m, h){
    // highliting 1st half
    mergeSelect(l,m,"#ffb700");
    // highliting 2nd half
    mergeSelect(m+1,h,"#f87208");
    
    // creating an auxilary array
    let a1 = new Array();
    let a2 = new Array();
    let n1 = m-l+1;
    let n2 = h-m;
    
    for(let i=0; i<n1; i++)
        a1.push(div_sizes[l+i]);
    for(let i=0; i<n2; i++)
        a2.push(div_sizes[m+1+i]);
    
    let i=0,j=0,k=l;
    while(i<n1 && j<n2){
        if(a1[i]<=a2[j]){
            mergeSelect(l+i, l+i, "#000dff");
            div_sizes[k++]=a1[i++];
        }
        else{
            mergeSelect(m+1+j, m+1+j, "#000dff");
            div_sizes[k++]=a2[j++];
        }
    }
    while(i<n1){
        mergeSelect(l+i, l+i, "#000dff");
        div_sizes[k++] = a1[i++];
    }
    while(j<n2){
        mergeSelect(j+m+1, j+m+1, "#000dff");
        div_sizes[k++] = a2[j++];
    }

    for(k=l; k<=h; k++, "white"){
        mergeHeight(k, div_sizes[k],"white",0)
    }
    let color = "#10ff00";
    if(l==0 && h==size-1)
        color = "green";
    for(k=l; k<=h; k++){
        mergeHeight(k, div_sizes[k],color,1)
    }
}

function MergeSort(l, h){
    if(l<h){
        let mid = Math.floor((l+ h)/2)
        MergeSort(l, mid);
        MergeSort(mid+1, h);
        merge(l, mid, h);
        return;
    }
    return;
}