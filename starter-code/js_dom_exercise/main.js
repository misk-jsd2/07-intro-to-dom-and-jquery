/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {


// var list = document.getElementById('fav-list')
//   console.log(list)
//  var subutton = document.getElementById('new-thing-button').value;
	    
        // var main_heading = document.createElement("li");
        var newelement = `<li>${newThing}</li>`
        // var heading_text = document.createTextNode(newThing);
        // main_heading.appendChild(heading_text);
        list.append(newelement);

// 	 }

}

window.onload = function() {
  // when someone clicks the button...

    var main_heading = document.createElement("h1");
     var heading_text = document.createTextNode("Hello dynamic world!");
     main_heading.appendChild(heading_text);
     document.body.appendChild(main_heading);

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
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
       
   var $list = $('#fav-list')
   var $subutton = $('#new-thing-button');
   var $text = $('#new-thing');
    
    $subutton.on('click', function(event){
  	event.preventDefault();
  	var pp = $text.val()
  	if(pp ===" "){
  		alert("please enter anyyhting");
  	}else 
  	{
  		 addToList($list,pp);
  		  $text.val('') ;

  	}
})

};


/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


