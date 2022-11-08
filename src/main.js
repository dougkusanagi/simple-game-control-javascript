import CommandList from "./CommandList.js";
import ControlConfig from "./ControlConfig.js";
ControlConfig();

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 80;

const drawText = (text) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "30px Arial";
  ctx.fillText(text, 20, 50);
};

function updateFrame() {
  if (CommandList.get("left")) drawText("Go Left");
  if (CommandList.get("right")) drawText("Go Right");
  if (CommandList.get("down")) drawText("Go Down");
  if (CommandList.get("up")) drawText("Go Up");
  if (CommandList.get("jump")) drawText("Jump");

  requestAnimationFrame(updateFrame);
}
updateFrame();
