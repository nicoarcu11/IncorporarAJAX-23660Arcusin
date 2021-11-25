var vector = [];

function constructorObjeto(nombre,color,peso){
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
}

function capturar () {
    var nombre = document.getElementById("nombre").value;
    var colorTemp = document.getElementById("color").value;
    var peso = document.getElementById("peso").value;

    const URLGET   = "https://jsonplaceholder.typicode.com/posts"
    const infoPost =  { nombree: nombre, color: colorTemp, weight: peso}
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div>
            Guardado:${respuesta.nombree}
            </div>`);
        }  
    });
    
    Add(nombre,colorTemp,peso)
}

$("#btn1").click(function json() { 
    
});

$('#button').on('click', () => {
    capturar();
});

$('#showObj').on('click', () => {
    mostrar();
});

$('#hideObj').on('click', () => {
    ocultar();
});

function color(color){
    $(".objeto").css("color",color);
}

function Add(nombre,colorTemp,peso){
    let name = nombre;
    let color = colorTemp;
    let weight = peso;
    let tempObject = new constructorObjeto(name,color,weight);
    vector.push(tempObject);
    let caja = document.createElement("div");
    let contenido = `<div style="display: none" class="objeto"><h1> ${name}</h1><h2>${color}</h2><h3>${weight}</h3><h1>--------------------------</h1></div>`;
    caja.innerHTML = contenido;
    $("#contenedor").append(caja);
    $(".objeto").fadeIn("slow")
                .css("color","blue");
}

function ocultar(){
    $("#contenedor").slideUp("slow");
}

function mostrar(){
    $("#contenedor").slideDown("slow");
}









    
    


