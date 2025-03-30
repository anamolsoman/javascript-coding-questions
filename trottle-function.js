function throttle(callback) {
  let timer = null;
  return (...args) => {
    if (!timer) {
      callback.call(this, ...args);
      timer = setTimeout(() => {
        timer = null;
      }, 1000);
    }
  };
}

export { throttle };
