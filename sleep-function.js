function sleep(miliseconds) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}

sleep(500).then(() => {
  console.log("it will run after 500 miliseconds");
});
