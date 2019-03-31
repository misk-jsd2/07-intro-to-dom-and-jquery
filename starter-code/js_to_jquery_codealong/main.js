// Convert favorites list to jQuery:


//function addToList(list, newThing) {
  function addToList($list, thing) {
  // var newThingLi = document.createElement('li');
  // var newThingText = document.createTextNode(newThing);

  //var newThingElement = '<li>${newThing}</li>'
  newThingLi.appendChild(newThingText);
  // list.appendChild(newThingLi);
  $list.append($thingLi);
}

window.onload = function() {
  // var button = document.getElementById('new-thing-button');
  // var thingList = document.getElementById('fav-list');
  // var newThingInput = document.getElementById('new-thing');

  var $thingList = $('#fav-list');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  //button.onclick = function(event) {
    $button.on('click', function(event) {

    event.preventDefault();
    // var newThing = newThingInput.value;
    var newThing = $newThingInput.val(); // no need $ to new thing

    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList(thingList, newThing);
      //newThingInput.value = '';
         $newThingInput.val('');

    }

  
  };
};

// function addToList($list, thing) {
//   var $thingLi = $('<li>');
//   $thingLi.text(thing);
//   $list.append($thingLi);
// }

//   var $thingList = $('#fav-list');
//   var $button = $('#new-thing-button');
//   var $newThingInput = $('#new-thing');

//   $button.on('click', function(event) {
//     event.preventDefault();
//     var newThing = $newThingInput.val(); // no need $ to new thing
//     if (newThing === '') {
//       alert('You must type in a value!');
//     } else {
//       addToList($thingList, newThing);
//       $newThingInput.val('');
//     }
//   });
