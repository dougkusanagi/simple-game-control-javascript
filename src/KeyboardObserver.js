import CommandList from "./CommandList.js";

export default class KeyboardObserver {
  key_command_list = new Map();
  disabled_keys = new Set();

  #log_key = false;
  #log_event = false;

  constructor() {
    return this.#returnSelfInstance();
  }

  bindKeyCommand(key, command) {
		const instance = new KeyboardObserver();

    if (!instance.key_command_list.has(key)) {
      instance.key_command_list.set(key, command);
    }
  }

  handleEvent(event) {
    const key = event.code;
    const is_active = event.type === "keydown";

    if (this.log_key && is_active) console.log(key);
    if (this.log_event && is_active) console.log(event);

    if (this.#is_key_disabled(key)) {
			event.preventDefault();
			return this.#returnSelfInstance();
		}
		
    if (!this.#is_key_defined(key)) return this.#returnSelfInstance();

    const comand = this.key_command_list.get(key);

    if (!this.#is_comand_defined(comand)) return this.#returnSelfInstance();

    CommandList.set(comand, is_active);

    event.preventDefault();
  }

  disableKey(key) {
    if (!this.disabled_keys.has(key)) {
      this.disabled_keys.add(key);
    }
  };

  enableLogKey() {
    this.log_key = true;
  }

  disableLogKey() {
    this.log_key = false;
  }

  enableLogEvent() {
    this.log_event = true;
  }

  disableLogEvent() {
    this.log_event = false;
  }

  /**
   * Private Methods
   */
	#returnSelfInstance() {
		return this.constructor.instance || (this.constructor.instance = this);
	}

  #is_key_disabled(key) {
    return this.disabled_keys.has(key);
  }

  #is_key_defined(key) {
    return this.key_command_list.has(key);
  }

  #is_comand_defined(comand) {
    return CommandList.has(comand);
  }
}
