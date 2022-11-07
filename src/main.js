import CommandList from "./CommandList.js";
import ControlConfig from "./ControlConfig.js";

ControlConfig();

function updateFrame() {
	if (CommandList.get('left')) console.log('Go Left');
	if (CommandList.get('right')) console.log('Go Right');
	if (CommandList.get('down')) console.log('Go Down');
	if (CommandList.get('up')) console.log('Go Up');
	if (CommandList.get('jump')) console.log('Jump');

	requestAnimationFrame(updateFrame);
}
updateFrame();
