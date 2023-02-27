//Menu lateral
var menu_visible = false;
let menu= document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false){//si está oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Ocultar el menu una vez seleccionada una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Creo las barritas de una barra particular identificada por su ID
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//Selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let autocad = document.getElementById("autocad");
crearBarra(autocad);

//Barritas que se van a pintar a través de un arreglo. Cada posición pertenece a un elemento 
//y comienzan en -1 porque no tiene ninguna pintada al iniciar

let contadores = [-1,-1,-1,-1];

let entro = false;

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 14, 0, intervalHtml);
        },100);
        const intervalJavaScript = setInterval(function(){
            pintarBarra(javascript, 12, 1, intervalJavaScript);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 16, 2, intervalPhotoshop);
        },100);
        const intervalAutocad = setInterval(function(){
            pintarBarra(autocad, 13, 3, intervalAutocad);
        },100);
    }
}
//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#054A29";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
