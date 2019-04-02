/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {

}

window.onload = function() {
  var button = document.getElementById('new-thing-button');
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');




  var main_heading = document.createElement("h1");
  var heading_text = document.createTextNode("Hello dynamic world!");
  main_heading.appendChild(heading_text);
  document.body.appendChild(main_heading);

  // Target items by id via the getElementById() method
  var helloElem = document.getElementById("hello");
  // We can access that element's css styles through the style property, and then accessing the css property through its camel-cased equivalent
  helloElem.style.color = "red";
  helloElem.style.fontFamily= "Georgia";

  var campusesContainer = document.getElementById("gaCampuses");
  // The getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.
  var gaCampuses = campusesContainer.getElementsByTagName("li");

  // We can iterate through the returned collection with a for loop
  for (var i = 0; i < gaCampuses.length; i++) {
       gaCampuses[i].style.backgroundColor = "black";



  var button = document.getElementById('my-input-button');
    // Event parameter is the default object event that would have happened on user click
    button.onclick = function(event) {
      console.log(event)

      // The preventDefault() method lets us disable the default action, allowing us to override with our on functionality.
      event.preventDefault();
      var newThing = newThingInput.value;
      //var newThing = $newThingInput.val();
      if (newThing === '') {
        alert('You must type in a value!');
      } else {
        addToList(thingList, newThing);
        newThingInput.val('');
      }
      MyApp.do_something("world");
    };
   }
  // when someone clicks the button...
  MyApp = {};

  MyApp.do_something = function(name) {
    console.log("Hello " + name);
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
}};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


/*                During class
----------------------------------------------------------------------------
function addToList(list, newThing){

  // var newThingElement = '<li>${newThing}</li>';
   //list.append(newThingElement);
   list.append('<li>${newThing}</li>');
 }
 
 
 
 
 window.onload = function()
 {
   var $hello = $('h1')
   
   $hello
   .css('color', 'red')
   .css('font-family', 'Georgia')
 
   
   var $button = $('#new-thing-button');
   var $thingList = $('#fav-list');
   var $newThingInput = $('#new-thing');
 
   $button.on('click', function(event)
   {
     event.preventDefault();
 
     var newThing = $newThingInput.val();
     if (newThing === '')
     {
       alert('You must type in a vlue!');
     }
     else {
       addToList($thingList, newThing);
       $newThingInput.val('')
     }
   })
 }*/