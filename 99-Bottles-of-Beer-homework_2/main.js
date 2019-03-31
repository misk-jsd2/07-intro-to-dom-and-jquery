function createSong(timeout) {
  timeout = timeout || 0;
  // create main ul that will contain all lines
  var ul = document.createElement("ul");
  document.body.appendChild(ul);

  for (let index = 99; index >= 0; index--) {
    sleep((100 - index) * timeout).then(() => {
      // writing song logic
      let bottle = index => (index == 1 ? "bottle" : "bottles");
      let numOfCoke = index =>
        index >= 1 ? index : index >= 0 ? "no more" : 99;
      let lyricsLine =
        `${numOfCoke(index)} ${bottle(index)} of coke on the wall, ` +
        ` ${numOfCoke(index)} ${bottle(index)} of coke. ` +
        (index >= 1
          ? `Take one down and pass it around, `
          : `Go to the store and buy some more, `) +
        `${numOfCoke(index - 1)} ${bottle(index - 1)} of coke on the wall.`;
      // console.log(lyricsLine);

      // creating and appending li element
      let li_text = document.createTextNode(lyricsLine);
      let li = document.createElement("li");
      li.appendChild(li_text);

      ul.appendChild(li);
    });
  }
}
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
window.onload = function() {
  // create main ul that will contain all lines

  document.getElementsByTagName("button")[0].onclick = () => {
    document.body.removeChild(document.getElementsByTagName("ul")[0]);
    createSong(300);
  };

  createSong();
};
