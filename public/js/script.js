window.onload = () => setRandomColor()

$('.generate-palette').on('click', setRandomColor)
$('.save-project').on('click', saveProject)

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color
}

function setRandomColor() {
  const allColors = [$('.one'), $('.two'), $('.three'), $('.four'), $('.five')]

  allColors.forEach(color => {
    const randomColor = getRandomColor()
    color.css('background-color', randomColor)
    color.children('span').text(randomColor)
  })
}

function saveProject() {
  console.log('saved??..')
}

