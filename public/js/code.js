const windowPatch = window.location.pathname;
console.log(windowPatch);
//botones del menu en constantes//
const subMenuMotos = document.querySelector("#subMenuCategoriasMotos");
const subMenuLogin = document.querySelector("#subMenuLogin");
const entrarNav = document.getElementById("entrar_nav");
const contactoNav = document.getElementById("contacto_nav");
const cotizacionNav = document.getElementById("cotizacion_nav");
const motosNav = document.getElementById("motos_nav");
const inicioNav = document.getElementById("inicio_nav");
const fragmentos = document.createDocumentFragment();
const contenedorHome = document.querySelector(".wrapper");

const fetchHome = () => {
    fetch("/topMotos", {
        method: "POST",
        body: '{"topMotos": "si"}',
        headers: { "content-type": "application/json" }
    })
        .then(res => res.json())
        .then(res => {
            let JsonTopMotos = res;
            console.log(JsonTopMotos);
            let contenedorMotos = document.createElement("DIV");
            contenedorMotos.classList.add("contenedor-motos");
            contenedorHome.appendChild(contenedorMotos);
            for (let i = 0; i < JsonTopMotos.length; i++) {
                console.log("entro en bucle");
                let id = i;
                let idProduct = JsonTopMotos[id]._id;
                let img_ = JsonTopMotos[id].img;
                let marca = JsonTopMotos[id].marca;
                let modelo = JsonTopMotos[id].modelo;
                let precio = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'CLP' }).format(JsonTopMotos[id].precio);
                let cilindrada = JsonTopMotos[id].cilindrada;
                let objMotos = new GeneradorDeMotos(id, marca, modelo, cilindrada, precio, img_, idProduct);
                objMotos.crear();

            }
            contenedorMotos = document.querySelector(".contenedor-motos");
            contenedorMotos.append(fragmentos);

        }).catch((e) => {
            console.log("error");
        })

}

class GeneradorDeMotos {
    constructor(id, marca, modelo, cilindrada, precio, img, idProduct) {
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
        this.precio = precio;
        this.img = img;
        this.id = id;// id generado solo en la web
        this.idProduct = idProduct; //id unico de db
    }
    crear() {
        console.log("entro en crear de viewTopMotos");
        let divMoto = document.createElement("DIV");
        let ret = document.createElement("INPUT");
        ret.classList.add("botonComprarMoto");
        ret.setAttribute("type", "button");
        ret.value = "Comprar";
        let retHidden = document.createElement("INPUT");
        retHidden.classList.add("buttonHidden");
        retHidden.setAttribute("type", "hidden");
        retHidden.value = this.idProduct;
        let form1 = document.createElement("FORM");
        form1.classList.add("formComprarMoto");
        form1.id = `form_moto${this.id}`;
        divMoto.classList.add(`itemTopMotos`);
        divMoto.innerHTML = `
        <img src='/imgs/motos${this.img}' class="item-img${this.id} moto-img"></div>
        <h2><b>${this.marca[0].toUpperCase() + this.marca.substring(1)}</b></h2>
        <h2><b>${this.modelo[0].toUpperCase() + this.modelo.substring(1)}</b></h2>
        <p>Cilindrada: <b>${this.cilindrada}</b></p>
        <p>Precio: <b>$${this.precio}</b></p>
        `;
        divMoto.append(form1);
        form1.append(ret, retHidden);
        ret.addEventListener("click", () => {
            console.log("click");
            console.log(retHidden.value);
            history.pushState(null, "", `/motos/${this.marca}/${this.modelo}`);
            document.querySelector(".contenedor-motos").remove();
            document.querySelector(".container_slider").remove();

        });
        fragmentos.append(divMoto);
    }
}
fetchHome();



//menu

motosNav.addEventListener("click", (e) => {
    e.preventDefault();
    subMenuMotos.classList.toggle("hidden");
    subMenuLogin.classList.add("hidden");
});
subMenuMotos.addEventListener("mouseover", () => {
    subMenuMotos.classList.remove("hidden");
    subMenuMotos.addEventListener("mouseout", () => {
        subMenuMotos.classList.add("hidden");
    })
})
entrarNav.addEventListener("click", (e) => {
    e.preventDefault();
    subMenuLogin.classList.toggle("hidden");
    subMenuMotos.classList.add("hidden");
});
subMenuLogin.addEventListener("mouseover", () => {
    subMenuLogin.classList.remove("hidden");
    subMenuLogin.addEventListener("mouseout", () => {
            subMenuLogin.classList.add("hidden");
    })
})








