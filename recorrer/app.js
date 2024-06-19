let win = window;
let dom = document;
let body = dom.body;
let divs = dom.querySelectorAll("div")
let div = dom.querySelector("div")
let form = dom.forms
let links = dom.links
let imgs = dom.images

let porid = dom.getElementById("documento")
let poridNew = dom.querySelector('#documento')
let porclase = dom.querySelector('.container')
let todasClases = dom.querySelectorAll(".container")
let atributo = dom.getElementsByName("search")
let old = dom.getElementsByClassName("input")

let item = dom.querySelectorAll("ul.list > li.item")
console.log(item)

console.log(win);
console.log(dom);
console.log(divs);
console.log(div);
console.log(form);
console.log(links);
console.log(imgs);
console.log(porid);
console.log(poridNew);
console.log(porclase);
console.log(todasClases);
console.log(atributo);
console.log(old);

console.log(dom.doctype);
console.log(dom.head);
console.log(body);
console.log(body.children);
console.log(body.children[1]);
console.log(dom.querySelectorAll("div"))
console.log(dom.querySelector("div"))



let lista = [...body.children]
// console.log(lista);

lista.map((x) => {
  // console.log(x);
})

console.clear()


// pasar a mayuscula

const p = dom.getElementById("api")

p.innerText = "¿QUE ES UN API?"

// console.log(body.nextElementSibling)

const cards = dom.getElementById("cards")

const cardHijo = cards.children

const array = [...cardHijo]

array.map((x, i) => {
  if (i % 2 == 0) {
    x.classList.toggle('bg-white')
    const f = x.children
    let y = f[1]
    y = y.children
    let w = [...y]
    w.map((k, l) => {
      if (l == 1) {
        k.classList.toggle('color-black')
      }
    })
  }
})

const $formulario = dom.getElementById('search')
$formulario.setAttribute("enctype", "multipart/form-data")

const $input = dom.querySelector('input')
$input.setAttribute("autocomplete", "off")
$input.removeAttribute("placeholder")
$input.setAttribute("placeholder", "señor...")
console.log($input)

console.clear()

// custom propertis css


const $html = dom.documentElement

const mineshatf = getComputedStyle($html).getPropertyValue("--hevymetal")
const $white = getComputedStyle($html).getPropertyValue("--white")

$html.style.setProperty("--hevymetal", "#fff")
$html.style.setProperty("--white", "#000")

console.log(mineshatf, $white)

const $parrafo = dom.querySelector('#elemento')
$parrafo.textContent = `Hola <b>soy</b> anticrito69`
// console.log($parrafo)