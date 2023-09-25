const form = document.getElementById('contactForm') // uses the id attribute - gives an invidual node
// const form = document.getElementsByClassName // uses the class attribute - gives an array []
// const form = document.querySelector // gets the first one it sees - gives an individual node
// const form = document.querySelectorAll // gets all with the selector - gives an array []

form.addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Thank you for your submission!')
})
