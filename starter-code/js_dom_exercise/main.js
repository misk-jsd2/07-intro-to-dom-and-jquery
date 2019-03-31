/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {

  let li = document.createElement('li')
  li.appendChild(newThing);
  list.appendChild(li);
}
window.onload = function() {

  var formInput = document.getElementById('new-thing');
  var favUl = document.getElementById('fav-list');
  var formButton = document.getElementById('new-thing-button');

  formButton.onclick = (e) =>{
    e.preventDefault();
    if(formInput.value==""){
      alert('you must type in a value!')
    }else{

      let li_text = document.createTextNode(formInput.value);
      addToList(favUl,li_text)
      formInput.value = "";
    }
  }
   
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


