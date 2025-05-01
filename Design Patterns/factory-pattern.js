class PrimaryButton {
  render() {
    console.log("primary button rendered");
  }
}

class SecondaryButton {
  render() {
    console.log("secondary button rendered");
  }
}

class Button {
  static createButton(btnType) {
    if (btnType === "primary") return new PrimaryButton();
    if (btnType === "secondary") return new SecondaryButton();
    else return null;
  }
}

const primaryBtn = Button.createButton("primary");
primaryBtn.render();
// console.log(primaryBtn);
