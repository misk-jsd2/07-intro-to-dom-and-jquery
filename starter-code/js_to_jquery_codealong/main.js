
function addToList($list, $newThing) {
  var $newThingLi = `<li>${$newThing}</li>`;
  $list.append($newThingLi);
}


window.onload = function() {
  var $button = $('#new-thing-button');
  var $thingList = $('#fav-list');
  var $newThingInput = $('#new-thing');

  $button.on('click',function(e){
    event.preventDefault();
    var $newThing = $newThingInput.val();
    if ($newThing === '') {
      alert('You must type in a value!');
    }else {
      addToList($thingList, $newThing);
      $newThingInput.val('');
    }
  });

};
