// Convert favorites list to jQuery:


function addToList(list, newThing) {
  var newThingLi = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  var newThingElement = `<li>${newThing}</li>`;
  //newThingLi.appendChild(newThingText);
  list.append(newThingElement);
}

window.onload = function() {
  var button = document.getElementById('new-thing-button');
  var $button = $('#new-thing-button');
  var thingList = document.getElementById('fav-list');
  var $thingList = $('#fav-list');
  var newThingInput = document.getElementById('new-thing');
  var $newThingInput = $('#new-thing');

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val()
    if (newThing === ''){
      alert ('you must type in a value!');
    }
    else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
})
};