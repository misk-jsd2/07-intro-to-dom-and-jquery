// Convert favorites list to jQuery:


function addToList(list, newThing) {
  //var newThingLi = document.createElement('li');
  //var newThingText = document.createTextNode(newThing);
  var newThingelemnt = <li>$(newThing)</li>;
  
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);
}

window.onload = function() {
  //var button = document.getElementById('new-thing-button');
  var button = $('new-thing-button');
  //var thingList = document.getElementById('fav-list');
  var thingList = $('fav-list');
  //var newThingInput = document.getElementById('new-thing');
  var newThingInput= $('new-thing');

  $button.on('click', function(event){

    var newThing = $newThingInput.val() 
    if (newThing === ''){
            alert('You must type in a value!');
    }
    else {
      addToList(thingList, newThing);
      $
    }

  } )

  //button.onclick = function(event) {
   // event.preventDefault();
   // var newThing = newThingInput.value;
   // if (newThing === '') {
  //    alert('You must type in a value!');
   // } else {
  //    addToList(thingList, newThing);
  //    newThingInput.value = '';
 //   }
// };

//};
