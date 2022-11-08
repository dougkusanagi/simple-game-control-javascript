export default class CommandList {
  command_list = new Map();

  constructor() {
    return this.constructor.instance || (this.constructor.instance = this);
  }

  static get(command) {
    return new CommandList().command_list.get(command);
  }

  static set(command, value = false) {
    new CommandList().command_list.set(command, value);
  }

  static has(command) {
    return new CommandList().command_list.has(command);
  }

  static setList(command_list) {
    for (const command in command_list) {
      CommandList.set(command);
    }
  }
}
