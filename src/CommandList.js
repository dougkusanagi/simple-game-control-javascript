export default class CommandList {
  command_list = new Map();

  constructor() {
    return this.constructor.instance || (this.constructor.instance = this);
  }
  
  static get(command) {
		const instance = new CommandList;
		return instance.command_list.get(command);
  }

  static set(command, value = false) {
		const instance = new CommandList;
    instance.command_list.set(command, value);
  }

  static has(command) {
		const instance = new CommandList;
    return instance.command_list.has(command);
  }
}