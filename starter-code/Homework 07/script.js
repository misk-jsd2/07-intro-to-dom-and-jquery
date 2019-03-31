$(document).ready(function(){


   for (var i = 99 ; i>=0; i--){
    var $thingLi = $(‘<li>’);
  var $list = $(“#lyr-list”);


if (i == 2){
$thingLi.text(i+” bottles of coke on the wall, “+i+” bottles of coke. Take one down and pass it around, “+(i-1)+” bottle of coke on the wall.“);
$list.append($thingLi);
   } else if (i == 1) {

          $thingLi.text(i+” bottle of coke on the wall, “+i+” bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.“);
        $list.append($thingLi);
   } else if (i == 0) {
           $thingLi.text(“No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.“);
        $list.append($thingLi);
   } else {
               $thingLi.text(i+” bottles of coke on the wall, “+i+” bottles of coke. Take one down and pass it around, “+(i-1)+” bottles of coke on the wall.“);
                $list.append($thingLi);

              }

}

                 });