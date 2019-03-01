// create & initialize canvas
const canvas = document.getElementById("canvas");
window.gfx = canvas.getContext("2d");
// animation loop
setInterval(function() {
  // Clear canvas with black
  gfx.beginPath();
  gfx.fillStyle = "black";
  gfx.rect(0, 0, 8000, 600);
  gfx.fill();
  //do drawing stuff here
}, 0); // no time between each frame
