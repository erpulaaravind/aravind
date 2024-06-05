const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input; 
}
function Clear(){
    display.value = " ";
}
function Equal(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "CHECK VALUES";
    }
}
function Delete(){
    var del = display.value;
    if(del.length >= 1){
        var delValue = del.slice(0, (del.length) - 1)
        display.value = delValue;
    }
}