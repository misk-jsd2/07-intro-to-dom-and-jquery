/* Independent Practice

Making a favorites list: jQuery


You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

*/

function addToList($list, thing) {
  var $Line = $('<li>');
  $Line.text(thing);
  $list.append($Line);
}

  var $ALyrics= $('#ALyrics');
  var $button = $('#new-line-button');
  var $b = 0;

  $button.on('click', function(event) {
    event.preventDefault();
  
    for (var i = 99 ; i  >= $b; i --)
  {
    if (( i > $b) && (i> 1)) {
      var Line = (i +" bottles of coke on the wall, "+ i + " bottles of coke. Take one down and pass it around, "+ (i-1) +" bottles of coke on the wall.");
      addToList($ALyrics, Line);
    
    }
    else if ( (i > $b) && (i == 1)){
      var Line = (i +" bottle of coke on the wall, " + i + " bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.");
      addToList($ALyrics, Line);
      
    }
    else if ( i == $b){
      var Line = ("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");
      addToList($ALyrics, Line);
      
    }
      else {
      var Line =('the end')
      addToList($ALyrics, Line);
    
    }
  }});
