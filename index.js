// Listen for keyboard presses
document.addEventListener("keypress", function(event) {
  var keyPressed = event.key;
  playSound(keyPressed);
  console.log("Key pressed: " + keyPressed);
});

/**
 * This function adds an event listener to each button with the class "drum",
 * so that when the button is clicked, it calls the playSound function with the
 * button's innerHTML as a parameter.
 *
 * @param {NodeList} buttons - A NodeList of buttons with the class "drum"
 */
function addClickListeners(buttons) {
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
      console.log("Button clicked: " + buttonInnerHTML);
    });
  });
}

// Call the addClickListeners function with the buttons we want to add event listeners to.
addClickListeners(document.querySelectorAll(".drum"));

/**
 * This function plays a sound based on the provided sound key.
 * The sound key is a string that corresponds to a specific sound file.
 * The function uses a switch statement to determine which sound to play.
 * If the sound key does not match any of the cases, the function logs the sound key to the console.
 *
 * @param {string} soundKey - The key of the sound to play.
 */
function playSound(soundKey) {
  // Switch statement to determine which sound to play based on the sound key.
  switch (soundKey) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("Unknown sound key: " + soundKey);
  }
}
