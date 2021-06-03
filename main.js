// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const emptyH = document.querySelectorAll('.like-glyph')
const fullH = document.querySelector('.activated')
const emptyHArray = Array.prototype.slice.call(emptyH)
const modal = document.querySelector('#modal')

const init = () => {
  emptyHArray.forEach(element => {
    element.addEventListener("click", () =>{
      mimicServerCall()
      .then(object => {
        if (element.innerHTML === EMPTY_HEART){
          element.classList = 'activated-heart'
          element.innerHTML = FULL_HEART
          emptyHArray.push(element)
        } else {
          element.classList = 'like-glyph'
          element.innerHTML = EMPTY_HEART
          emptyHArray.push(element)
        }
      })
      .catch(error => {
        const modal = document.querySelector('#modal')
        modal.classList.remove('hidden')
        setTimeout(() =>{
          modal.classList = 'hidden'
        }, 3000)
      })
    })
  });
}



document.addEventListener("DOMContentLoaded", init)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
