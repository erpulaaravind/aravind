var navBar = document.getElementById("sidebar");
function foldfun(x){
    x.classList.toggle("change");
    if(navBar.style.display == "block"){
        navBar.style.display = "none";
    }
    else{
        navBar.style.display = "block";
    }
}
