let searchValue = document.querySelector(".value");
let listValues = document.querySelector("ul");

function addTask(){
    if(searchValue.value === ''){
        alert("Enter a Task");
    }
    else{
        let task = document.createElement("li");
        task.innerHTML = searchValue.value;
        listValues.appendChild(task);
        let span = document.createElement("span");
        span.innerHTML = "X";
        task.appendChild(span);
        saveData();
    }
    searchValue.value = "";
    saveData();
}
listValues.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    saveData();
   
},false);
function saveData(){
    localStorage.setItem("data",listValues.innerHTML);
}
function showData(){
    listValues.innerHTML = localStorage.getItem("data");
}
showData();
