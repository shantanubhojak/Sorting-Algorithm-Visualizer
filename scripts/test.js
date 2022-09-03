// checking if sorted
function isSorted(){
    var check = 1;
    for(let i=0; i<size-1; i++){
        if(div_sizes[i]>div_sizes[i+1]){
            check = 0;
            break;
        }
    }
    if(check==1)
        console.log("yes");
    else
        console.log("No");
}
