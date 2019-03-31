/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {

}

window.onload = function() {
  var main_heading = document.createElement("h1");
     var heading_text = document.createTextNode("Hello dynamic world!");
     main_heading.appendChild(heading_text);
     document.body.appendChild(main_heading);
  // when someone clicks the button...
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
         gaCampuses[i].style.backgroundColor = "red";
     }
 }

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


