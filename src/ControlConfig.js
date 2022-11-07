import InputObserver from "./InputObserver.js";
import GamepadObserver from "./GamepadObserver.js";
import KeyboardObserver from "./KeyboardObserver.js";

const commands = {
  left: "left",
  down: "down",
  right: "right",
  up: "up",
	jump: "jump",
};

function registerCommands() {
  const keyboard_observer = new KeyboardObserver();
  keyboard_observer.bindKeyCommand("KeyA", commands.left);
  keyboard_observer.bindKeyCommand("KeyS", commands.down);
  keyboard_observer.bindKeyCommand("KeyD", commands.right);
  keyboard_observer.bindKeyCommand("KeyW", commands.up);
  keyboard_observer.bindKeyCommand("Space", commands.jump);
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

export default function ControlConfig() {
  registerCommands();
  registerControlObservers();
}
