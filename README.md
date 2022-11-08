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

addKeyboardControl({ comand: comand_list.left, key: "ArrowLeft" });
addKeyboardControl({ comand: comand_list.right, key: "ArrowRight" });
addKeyboardControl({ comand: comand_list.down, key: "ArrowDown" });

addKeyboardControl({ comand: comand_list.jump, key: "ArrowUp" });
addKeyboardControl({ comand: comand_list.jump, key: "Space" });
```

<br />

<h2>Using the controls:</h2>

<p>After that you can use the <code>controls()</code> function to check if the comand is active or not, for example:</p>

```js
const updateFrame = () => {
  if (controls('left')) console.log('Go to the left');
  if (controls('right')) console.log('Go to the right');
  if (controls('jump')) console.log('Jump');

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

