function main() {

const score = 0
let picked = []
let pickedID= []
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
  pickedID.push(id)
  picked.push(cards[id].name)
  console.log(pickedID);
  
  if (picked[0]==picked[1]){
    score+=10
    boxes[pickedID[0]].classList.add('picked')
    boxes[pickedID[1]].classList.add('picked')
    boxes[pickedID[0]].removeEventListener('click',boxClicked)
    boxes[pickedID[1]].removeEventListener('click',boxClicked)
  }
}


}

main()
