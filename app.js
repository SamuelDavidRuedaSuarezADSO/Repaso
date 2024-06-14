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

console.log(body.nextElementSibling)