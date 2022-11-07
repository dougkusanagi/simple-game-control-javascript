export default class GamepadObserver {
  constructor(event = null) {
		if (!event || !event instanceof KeyboardEvent) {
			return this.#returnSelfInstance();
		}

    this.eventHandler(event);
    return this.#returnSelfInstance();
  }

  handleEvent(event) {
		// console.log(event);
  }

	#returnSelfInstance() {
		return this.constructor.instance || (this.constructor.instance = this);
	}
};