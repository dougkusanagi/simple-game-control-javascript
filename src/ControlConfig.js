import InputObserver from "./InputObserver.js";
import GamepadObserver from "./GamepadObserver.js";
import KeyboardObserver from "./KeyboardObserver.js";
import CommandList from "./CommandList.js";

export default function ControlConfig() {
  CommandList.setList(command_list);
  bindKeyboardKeys();
  registerControlObservers();
}

const command_list = {
  left: "left",
  down: "down",
  right: "right",
  up: "up",
  jump: "jump",
  AltLeft: "AltLeft",
};

function bindKeyboardKeys() {
  const keyboard_observer = new KeyboardObserver();
  keyboard_observer.bindKeyCommand("KeyA", command_list.left);
  keyboard_observer.bindKeyCommand("KeyS", command_list.down);
  keyboard_observer.bindKeyCommand("KeyD", command_list.right);
  keyboard_observer.bindKeyCommand("KeyW", command_list.up);

  keyboard_observer.bindKeyCommand("ArrowLeft", command_list.left);
  keyboard_observer.bindKeyCommand("ArrowDown", command_list.down);
  keyboard_observer.bindKeyCommand("ArrowRight", command_list.right);
  keyboard_observer.bindKeyCommand("ArrowUp", command_list.up);

  keyboard_observer.bindKeyCommand("Space", command_list.jump);
  
	keyboard_observer.disableKey(command_list.AltLeft);
	// keyboard_observer.enableLogKey();
  // keyboard_observer.enableLogEvent();
}

function registerControlObservers() {
  const input_observer = new InputObserver();
  input_observer.subscribe(KeyboardObserver);
  input_observer.subscribe(GamepadObserver);

  window.addEventListener("keydown", (event) => input_observer.notify(event));
  window.addEventListener("keyup", (event) => input_observer.notify(event));
}


