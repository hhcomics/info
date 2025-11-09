//ändra tillstånd
function state(className,newState){    
    let classLength = document.getElementsByClassName(className).length;
    for(let i = 0;i<classLength;i++){
        document.getElementsByClassName(className)[i].style.display=newState;
    }
}
//engelska
function eng(){
    state("eng","block");
    state("sve","none");
}
//svenska
function sve(){    
    state("eng","none");
    state("sve","block");
}
//kör engelska per default
window.onload=eng;