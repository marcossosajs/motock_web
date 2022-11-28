const windowPatch = window.location.pathname;
console.log(windowPatch);
//botones del menu en constantes//
const contactoNav = document.getElementById("contacto_nav");
const cotizacionNav = document.getElementById("cotizacion_nav");
const motosNav = document.getElementById("motos_nav");
const inicioNav = document.getElementById("inicio_nav");
// eventos sobre los botones del menu
//contacto
contactoNav.addEventListener("click", ()=>{
    console.log("contacto");
});
//cotizacion
cotizacionNav.addEventListener("click", ()=>{
    console.log("cotizacion");
});
//motos
motosNav.addEventListener("click", ()=>{
    console.log("motos");
});
//inicio
inicioNav.addEventListener("click", ()=>{
    console.log("inicio");
});

 


/*
if (windowPatch == "/"){
    let data = {
        "topMotos" : "topMotos"
    }
    console.log("se pediran las motos");
    fetch("/topMotos",{
        method : "POST",
        body: JSON.stringify(data),
        headers: {"content-type": "application/json"}
    })
    .then(res=> res.json())
    .then(res=> console.log(res))
    .then(res=> {
        if (res.comprobar === "si"){
            console.log("hola");
        }
    })
}

*/