function main() {
  const stage = document.getElementById('stage')
  let attempts = 0
  let matches = 0
  let picked = []
  let pickedID = []
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
  cards.sort(() => Math.random() - 0.5)


  const boxes = Array.from(document.getElementsByClassName("box"))

  stage.addEventListener('change', stageChange)


  for (box of boxes) {
    box.addEventListener('click', boxClicked)
  }



  function checkWin() {

    if (picked[0] == picked[1]) {
      boxes[pickedID[0]].classList.add('picked')
      boxes[pickedID[1]].classList.add('picked')
      boxes[pickedID[0]].removeEventListener('click', boxClicked)
      boxes[pickedID[1]].removeEventListener('click', boxClicked)
      
      picked = []
      pickedID = []
      matches += 1
      document.querySelector('#matches').innerHTML = matches
      if (matches === 6) {
        const win = new Audio("sounds/complete.wav")
        win.play()
      }else {
          const matchSound = new Audio("sounds/match.wav")
          matchSound.play()
      }
    }
    else if (picked[0] !== picked[1]) {
      boxes[pickedID[0]].addEventListener('click', boxClicked)
      boxes[pickedID[1]].addEventListener('click', boxClicked)
      boxes[pickedID[0]].setAttribute("src", "pictures/shine.png")
      boxes[pickedID[1]].setAttribute("src", "pictures/shine.png")
      picked = []
      pickedID = []
    }
  }


  function boxClicked() {

    const id = this.getAttribute('data-id')
    this.setAttribute("src", cards[id].picture)
    pickedID.push(id)
    picked.push(cards[id].name)
    this.removeEventListener('click', boxClicked)
    if (picked.length == 2) {
      setTimeout(checkWin, 400)
      attempts += 1
      document.querySelector('#attempt').innerHTML = attempts
    }
  }

function stageChange() {
  const stageBG = document.querySelector('main')
  if (stage.value === "fd"){
    stageBG.style.backgroundImage = 'url(pictures/Finaldestination.png)'
  } else if (stage.value === "dl"){
    stageBG.style.backgroundImage = 'url(pictures/dreamland.png)'
  } else if (stage.value === "bf"){
    stageBG.style.backgroundImage = 'url(pictures/BF.jpg)'
  }
}

}

main()
