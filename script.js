const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
let minutes
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

function countdown() {
    setTimeout(function() {
        let seconds = number(secondsDisplay.textContent)
    
        if(seconds <= 0) {
            seconds = 60
        }
    
        secondsDisplay.textContent = seconds - 1

        countdown()

    }, 1000);
}

buttonPlay.addEventListener("click", function() {
    buttonPlay.classList.add("hide") /* button play hide. */
    buttonPause.classList.remove("hide") /* button pause appears. */
    buttonSet.classList.add("hide") /* button set hide. */
    buttonStop.classList.remove("hide") /* button stop appears. */

    countdown()
})

buttonPause.addEventListener("click", function() {
    buttonPause.classList.add("hide") /* button pause hide. */
    buttonPlay.classList.remove("hide") /* button play appears. */
})

buttonStop.addEventListener("click", function() {
    buttonPlay.classList.remove("hide") /* button play appears. */
    buttonPause.classList.add("hide") /* button pause hide. */
    buttonSet.classList.remove("hide") /* button set appears. */
    buttonStop.classList.add("hide") /* button stop hide. */
})

buttonSoundOff.addEventListener("click", function() {
    buttonSoundOff.classList.add("hide") /* button sound-off hide. */
    buttonSoundOn.classList.remove("hide") /* button sound-on appears. */
})

buttonSoundOn.addEventListener("click", function() {
    buttonSoundOn.classList.add("hide") /* button sound-on hide. */
    buttonSoundOff.classList.remove("hide") /* button sound-off appears. */
})

buttonSet.addEventListener("click", function() {
    minutes = prompt("How many minutes?")
    minutesDisplay.textContent = minutes /* To change the text (minutes). */
})
