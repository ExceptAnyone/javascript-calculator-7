import Calculator from './controller/Calculator.js';

class App {
  constructor() {
    this.calculator = new Calculator();
  }
  async run() {
    await this.calculator.start();
  }
}

export default App;
