class LightButton {
  render() {
    console.log("render light button");
  }
}

class DarkButton {
  render() {
    console.log("render dark button");
  }
}

class LightCheckbox {
  render() {
    console.log("render light checkbox");
  }
}
class DarkCheckbox {
  render() {
    console.log("render dark checkbox");
  }
}

class LightThemeFactory {
  static createButton() {
    return new LightButton();
  }
  static createCheckBox() {
    return new LightCheckbox();
  }
}

class DarkThemeFactory {
  static createButton() {
    return new DarkButton();
  }
  static createCheckBox() {
    return new DarkCheckbox();
  }
}

function renderUI(factoryTheme) {
  const button = factoryTheme.createButton();
  const checkbox = factoryTheme.createCheckBox();
  button.render();
  checkbox.render();
}

const theme = "dark";
const factoryTheme = theme === "dark" ? DarkThemeFactory : LightThemeFactory;

renderUI(factoryTheme);
