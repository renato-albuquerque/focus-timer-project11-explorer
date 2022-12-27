const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
let minutes
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

function resetControls () {
    buttonPlay.classList.remove("hide") /* button play appears. */
    buttonPause.classList.add("hide") /* button pause hide. */
    buttonSet.classList.remove("hide") /* button set appears. */
    buttonStop.classList.add("hide") /* button stop hide. */
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0") /* To change the text (minutes). */
    secondsDisplay.textContent = String(seconds).padStart(2, "0") /* To change the text (minutes). */
}

function countdown() {
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        
        updateTimerDisplay(minutes, 0)
        
        if(minutes <= 0) {
            resetControls ()        
            return
        }

        if(seconds <= 0) {
            seconds = 60
            --minutes
        }
    
        updateTimerDisplay(minutes, String(seconds - 1))

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
    resetControls ()        
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
    updateTimerDisplay(minutes, 0)
})
