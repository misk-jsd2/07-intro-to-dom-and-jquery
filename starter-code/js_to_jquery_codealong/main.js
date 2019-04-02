// Convert favorites list to jQuery:


function addToList(list, newThing) {
  //var newThingLi = document.createElement('li');
  var newThingElement = `<li>${newThing}</li>`;

  //var newThingText = document.createTextNode(newThing);
 // newThingLi.appendChild(newThingText);
  list.append(newThingElement);
}

window.onload = function() {
 // var button = document.getElementById('new-thing-button');
  var $button = $('#new-thing-button');
 // var thingList = document.getElementById('fav-list');
  var $thingList = $('#fav-list');
  //var newThingInput = document.getElementById('new-thing');
  var $newThingInput = $('#new-thing');

  $button.on('click', function(event){
  event.preventDefault();
  var newthing = $newThingInput.val() 
if (newthing==''){
  alert('youmust type value ');
}
else {
  addToList($thingList, newthing);
  $newThingInput.val('');

}

});
 // button.onclick = function(event) {
   // event.preventDefault();
   // var newThing = newThingInput.value;
    // if (newThing === '') {
    //   alert('You must type in a value!');
    // } else {
    //   addToList(thingList, newThing);
    //   newThingInput.value = '';
    // }
  //};

};
