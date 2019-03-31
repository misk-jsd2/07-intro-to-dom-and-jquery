var $element = $('#list');
var $fragment = $(document.createDocumentFragment());


for (var $i = 99; $i >= 0; $i--) {
  var $li = $('<li></li>');
  if ($i == 0) {
    $li.text("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");
  }
  else if ($i == 1) {
    $li.text($i+" bottle of coke on the wall, " + $i + " bottle of coke. Take one down and pass it around, "+ ($i-1) +" bottle of coke on the wall.");
  }
  else{
    $li.text($i+" bottles of coke on the wall, " + $i + " bottles of coke. Take one down and pass it around, "+ ($i-1) +" bottles of coke on the wall.");
  }
  $fragment.append($li);
};

$element.append($fragment);
