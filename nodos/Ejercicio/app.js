import { data } from './datos.js';

const $fragmen = document.createDocumentFragment()
const $padre = document.querySelector('section#card > div.container')
$padre.classList.add('cards')

data.map((i) => {
  //creamos la div.card
  const card = document.createElement('div')
  card.classList.add('card')
  //creamos el card__header
  const cardHead = document.createElement('div')
  cardHead.classList.add('card__header')
  card.appendChild(cardHead)
  //creamos el title
  const title = document.createElement('h2')
  title.innerText = i.title
  title.classList.add('card__title')
  cardHead.appendChild(title)
  //creamosel card__body
  const body = document.createElement('div')
  body.classList.add('card__body')
  card.appendChild(body)
  //adentro del card__body agregamos el contenido
  const img = document.createElement('img')
  img.src = i.src
  img.classList.add('card__img')
  body.appendChild(img)
  //agregamos el paragraph al card__body
  const par = document.createElement('p')
  par.classList.add('card__paragraph')
  par.innerText = i.paragraph
  body.appendChild(par)
  //agregamos la etiqueta a que transformamos en boton
  const a = document.createElement('a')
  a.classList.add("button")
  a.classList.add("button--outline")
  a.href = i.url
  //adentro del a agregamos el span y el i o icono
  const span = document.createElement('span')
  span.classList.add("button__text")
  span.innerText = "Saber más"
  a.appendChild(span)
  const icon = document.createElement('i')
  icon.classList.add("bx")
  icon.classList.add("bxs-chevron-right")
  icon.classList.add("button__icon")
  a.appendChild(icon)

  body.appendChild(a)

  $fragmen.appendChild(card)
})

$padre.appendChild($fragmen)