class BrowserHistory {
  constructor() {
    this.history = [];
    this.index = -1;
  }

  visit(url) {
    this.history.push(url);
    ++this.index;
  }
  current() {
    return this.history[this.index];
  }

  backword() {
    this.index = this.index > 0 ? --this.index : this.index;
  }

  forward() {
    this.index =
      this.history.length - 1 > this.index ? ++this.index : this.index;
  }

  allHistory() {
    return this.history;
  }
}

let bh = new BrowserHistory();
bh.visit("google.com");
bh.visit("facebook.com");
bh.visit("microsoft.com");
bh.backword();
bh.backword();
console.log(bh.current());
bh.forward();
console.log(bh.current());
