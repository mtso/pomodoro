var isTicking = false;
var secondsLeft = 25 * 60;

function handleNum(e) {
  if (isTicking) {
    toggleTimer()
  }
  secondsLeft = +e.value * 60;
  displayTime(secondsLeft)
}

function toggleTimer() {
  isTicking = !isTicking;
  document.getElementById('play').innerText = isTicking ?
    'Pause' : 'Start'
}

let clock = setInterval(handleTick, 1000)

function handleTick() {
  if (isTicking) {
    secondsLeft -= 1
    displayTime(secondsLeft)
    isTicking = secondsLeft < 1
  }
}

function stringifySeconds(seconds) {
  return pad(Math.floor(seconds / 60)) + ':' + pad(seconds % 60)
}

function pad(sec) {
  return (sec < 10) ? '0'+sec : sec
}

function displayTime(seconds) {
  let isExpired = seconds < 1
  let text = isExpired ? 'MOVE ON' : stringifySeconds(seconds)
  let display = document.getElementById('display')
  display.innerText = text
  display.className = isExpired ? 'expired' : ''
}

document.getElementById('num').addEventListener('keydown', e => e.preventDefault())
