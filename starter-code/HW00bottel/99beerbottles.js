  for(var i = 99; i >=0; i--){
      var thingList = document.getElementById('fav-list');
var newThingLi = document.createElement('li');
if ( i == "0"){
var newThing = (i +" No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");
  var newThingText = document.createTextNode(newThing);
}
else if (i == "1"){
var newThing = (i +" Bottle of Coke on the Wall in the terminal. If you're unfamiliar with the song, you can find the lyrics below.");
  var newThingText = document.createTextNode(newThing);
}
else { var newThing =(i +" Bottles of Coke on the Wall in the terminal. If you're unfamiliar with the song, you can find the lyrics below.");
var newThingText = document.createTextNode(newThing);
}
newThingLi.appendChild(newThingText);
  thingList.appendChild(newThingLi);

}
