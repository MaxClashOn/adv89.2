function addUser(){
    jugador1=document.getElementById("Nombre_de_jugador_1").value ;
    jugador2=document.getElementById("Nombre_de_jugador_2").value ;
    localStorage.setItem("jugador1",jugador1);
    localStorage.setItem("jugador2",jugador2);
    window.location="game_page.html"
}