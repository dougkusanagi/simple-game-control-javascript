<h1>Simple Game Controller</h1>

<p>This is a very simple keyboard control implementation, i'll try to implement a gamepad, touchpad and mouse too.</p>

```properties
yarn && yarn build
```

<br />

<h2>Set your controls</h2>

<p>Just set your comands in the <code>const comand_list</code> in the <code>ControlConfig.js</code> file and use the <code>keyboard_observer.bindKeyCommand()</code> to bind the comand to a key for example:</p>

```js
const comand_list = {
  left: "left",
  right: "right",
  down: "down",
  jump: "jump",
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
```

<br />

<h2>Using the controls:</h2>

<p>After that you can use the <code>CommandList.get()</code> function to check if the comand is active or not, for example:</p>

```js
const updateFrame = () => {
  if (CommandList.get('left')) console.log('Go to the left');
  if (CommandList.get('right')) console.log('Go to the right');
  if (CommandList.get('jump')) console.log('Jump');

  window.requestAnimationFrame(updateFrame);
}

updateFrame();
```

<br />

<h2>Todo list:</h2>

- [x] Implement useKeyboardControls
- [ ] Implement useGamepadControls
- [ ] Implement useTouchControls
- [ ] Implement useMouseControls
- [ ] Implement automated tests

