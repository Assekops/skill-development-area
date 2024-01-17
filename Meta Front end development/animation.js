let canvas = document.getElementById('my_canvas');
let contex = canvas.getCotext('2d');

const speed = 4;
let postion = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall() {
  if (postion + radius > 640) {
    moveSpeed = -speed;
  } else if (postion - radius < 0) {
    moveSpeed = speed;
  }
  postion += moveSpeed;
}

function drawBall() {
  contex.clearRect(0, 0, 640, 480);
  contex.fillStyle = '#62687f';
  contex.beginPath();
  contex.arc(postion, 50, radius, 0, 2 * Math.PI);
  contex.fill();
}
function animate() {
  moveBall();
  drawBall();
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
