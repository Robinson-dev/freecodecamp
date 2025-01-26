/*const misToppings = document.getElementsByTagName("li");
console.log(misToppings);


const tippingsFondoMarron = document.getElementsByClassName("fondo-marron");
console.log(tippingsFondoMarron);

const aceitunas = document.querySelector("#aceitunas");
console.log(aceitunas);

const toppingsNaranjas = document.querySelectorAll(".topping.fondo-naranja");
console.log(toppingsNaranjas);

const primerTopping = document.querySelector(".topping");
primerTopping.style.color = "#6dff00";
primerTopping.style.background = "blue";
primerTopping.style.textTransform = "uppercase";

const listaToppings = document.getElementById("lista-toppings");
console.log(listaToppings);
console.log(listaToppings.textContent);
console.log(listaToppings.innerText);
console.log(listaToppings.innerHTML);   

const titulo = document.getElementById("titulo")
titulo.innerText = "Mis toppings Favoritos";

const enlace = document.getElementsByTagName("a");
console.log(enlace[0].setAttribute("href", ""));

const primerTopping = document.querySelector(".topping");
primerTopping.classList.add("texto-verde");
console.log(primerTopping.classList); 

const listaToppings = document.getElementById("lista-toppings");

const toppingNuevo = document.createElement("li");
toppingNuevo.classList.add("topping", "fondo-marron");
toppingNuevo.innerText="Queso Extra";
listaToppings.append(toppingNuevo);


function mostrarClic1() {
    console.log("Me hicieron clic, soy la aceituna");
}
function mostrarClic2() {
    console.log("Me hicieron clic, soy la cebolla");
}
function mostrarClic3() {
    console.log("Me hicieron clic, soy el albahaca");
}
function mostrarClic4() {
    console.log("Me hicieron clic, Champiñones");
}




const Albahaca = document.getElementById("Albahaca");

function mostrarClic(e){
    console.log(e.target);
}
albahaca.addEventListener("click", mostrarClic);

*/

const toppings = document.getElementsByClassName("topping");

function mostrarClic(e){
console.log(e.target.innnerText);
}

for (const topping of toppings) {
topping.addEventListener("click", mostrarClic);
}


















