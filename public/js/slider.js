//seleccionando el slider id
const slider = document.querySelector("#slider");
//seleccionar todos los slider__section 
const sliderSection = document.querySelectorAll(".slider__section");
//para obtener el ultimo section, calculamos el largo y ponemos -1 que es decir el ultimo.  
const sliderSectionLast = sliderSection[sliderSection.length -1];

//seleccionando los botones del slider con sus id.
const btnLeft=document.querySelector("#btn-left");
const btnRight=document.querySelector("#btn-right");
// movemos sliderSectionLast (ultimo slider) al comienzo, "after begin"
/*
'beforebegin': Antes del elementoObjetivo.
'afterbegin': Dentro del elementoObjetivo, antes de su primer hijo.
'beforeend': Dentro del elementoObjetivo, después de su último hijo.
'afterend': Después del elementoObjetivo.
*/
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

const next = ()=>{
    //seleccionamos solo al primero de todos los elementos con .slider__section.
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft= "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
}
const prev = ()=>{
    const sliderSection = document.querySelectorAll(".slider__section");
    //para obtener el ultimo section, calculamos el largo y ponemos -1 que es decir el ultimo.  
    const sliderSectionLast = sliderSection[sliderSection.length -1];
    //seleccionamos solo al primero de todos los elementos con .slider__section.
    slider.style.marginLeft= "0";
    slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
}
btnRight.addEventListener("click", ()=>{
    console.log("click");
    next();
})
btnLeft.addEventListener("click", ()=>{
    console.log("click");
    prev();
})
setInterval(()=>{
    next();
},2000)