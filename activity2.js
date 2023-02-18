function regresar(){
    window.location="activity_1.html"
}
function obtenerPuntos(){
    puntos2=localStorage.getItem("puntos");
    document.getElementById("update").innerHTML="<h1>puntuacion: "+puntos2+"</h1>";
}