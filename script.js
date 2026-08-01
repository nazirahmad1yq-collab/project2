function openImage(src){
    document.getElementById("viewer").style.display = "flex";
    document.getElementById("fullImage").src = src;
}

function closeImage(){
    document.getElementById("viewer").style.display = "none";
}