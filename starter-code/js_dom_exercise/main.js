/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {
  var newThingLi = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);

}

window.onload = function() {
  var main_heading = document.createElement('h1')
  var heading_text = document.createTextNode('hello dynamic word')
  main_heading.appendChild(heading_text);
  document.body.appendChild(main_heading);
  // when someone clicks the button...

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};
// run this function when the document is loaded
window.onload = function() {
  // Target items by id via the getElementById() method
  var helloElem = document.getElementById("hello");
  // We can access that element's css styles through the style property, and then accessing the css property through its camel-cased equivalent
  helloElem.style.color = "red";

  var campusesContainer = document.getElementById("gaCampuses");
  // The getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.
  var gaCampuses = campusesContainer.getElementsByTagName("li");

  // We can iterate through the returned collection with a for loop
  for (var i = 0; i < gaCampuses.length; i++) {
       gaCampuses[i].style.backgroundColor = "green";
   }
   button = document.getElementById('my-input-button');
   // Event parameter is the default object event that would have happened on user click
   button.onclick = function(event) {
     // The preventDefault() method lets us disable the default action, allowing us to override with our on functionality.
     event.preventDefault();
     MyApp.do_something("world");
   };
   MyApp = {};

   MyApp.do_something = function(name) {
     console.log("Hello " + name);
   }
  var button = document.getElementById('new-thing-button');
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList(thingList, newThing);
      newThingInput.value = '';
    }
  }
   
}

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


