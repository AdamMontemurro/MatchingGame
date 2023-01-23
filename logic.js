function main() {


let picked = []
const cards = [
  {
    name: 'fox',
    picture: 'pictures/fox.png'

  },
  {
    name: 'falco',
    picture: 'pictures/falco.png'

  },
  {
    name: 'peach',
    picture: 'pictures/Peach.png'

  },
  {
    name: 'mario',
    picture: 'pictures/Mario.png'

  },
  {
    name: 'falcon',
    picture: 'pictures/Falcon.png'

  },
  {
    name: 'marth',
    picture: 'pictures/Marth.png'

  },
  {
    name: 'fox',
    picture: 'pictures/fox.png'

  },
  {
    name: 'falco',
    picture: 'pictures/falco.png'

  },
  {
    name: 'peach',
    picture: 'pictures/Peach.png'

  },
  {
    name: 'mario',
    picture: 'pictures/Mario.png'

  },
  {
    name: 'falcon',
    picture: 'pictures/Falcon.png'

  },
  {
    name: 'marth',
    picture: 'pictures/Marth.png'

  }
]
cards.sort( ()=> Math.random() - 0.5 )


const boxes = Array.from(document.getElementsByClassName("box"))


for (box of boxes){
  box.addEventListener('click', boxClicked)
}
function boxClicked() {
  const id = this.getAttribute('data-id')
  this.setAttribute("src",cards[id].picture)

}


}

main()
