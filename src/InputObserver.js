export default class InputObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(event) {
    this.observers.forEach((observer) => (new observer).handleEvent(event));
  }
}
