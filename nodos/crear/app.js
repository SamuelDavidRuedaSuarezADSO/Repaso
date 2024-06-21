import { datos } from "./datos.js";
const dom = document

//identificamos el elemento por la clase
const $padre = dom.querySelector(".container")
//creamos un elemento
const nodo = dom.createElement('p')
const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae a alias atque voluptate eos, accusamus deserunt cum quia ipsa pariatur ipsam, iste ipsum ab architecto voluptatibus similique quibusdam perspiciatis nam."

nodo.innerText = text

//agregar al container padre
$padre.appendChild(nodo)

const nodo2 = dom.createElement("p")
const text2 = "          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae a alias atque voluptate eos, accusamus deserunt cum quia ipsa pariatur ipsam, iste ipsum a"

nodo2.innerText = text2

$padre.appendChild(nodo2)

const $lista = dom.querySelector("div.container > div.card > ul.list")

datos.map((x) => {
  const elemt = dom.createElement("li")
  elemt.innerText = x.name
  elemt.classList.add("class", "item")
  $lista.appendChild(elemt)
})