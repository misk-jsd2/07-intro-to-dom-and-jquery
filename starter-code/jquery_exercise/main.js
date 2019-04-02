/* Independent Practice

Making a favorites list: jQuery


You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

// */

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
//     var newThing = $newThingInput.val();
//     var $b = 0;
//     for (var newThing = 99 ; newThing  >= zb; newThing --)
//   {
//     if (( newThing > b) && (newThing> 1)) {
//       newThing = (i +" bottles of coke on the wall, "+ i + " bottles of coke. Take one down and pass it around, "+ (i-1) +" bottles of coke on the wall.");
//       addToList($thingList, newThing);
//       $newThingInput.val('');
//     }
//     else if ( (newThing > b) && (newThing == 1)){
//       newThing=(i +" bottle of coke on the wall, " + i + " bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.");
//       addToList($thingList, newThing);
//       $newThingInput.val('');
//     }
//     else if ( newThing == b){
//       newThing= ("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");
//       addToList($thingList, newThing);
//       $newThingInput.val('');
//     }
//       else {
//       newThing=('the end')
//       addToList($thingList, newThing);
//       $newThingInput.val('');
//     }
//   }});
