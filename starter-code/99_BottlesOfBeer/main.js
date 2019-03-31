var $element = $('#list');
var $fragment = $(document.createDocumentFragment());


for (var $i = 99; $i >= 0; $i--) {
  var $li = $('<li></li>');
  if ($i == 0) {
    $li.text("No more bottles of Beer on the wall, no more bottles of Beer. Go to the store and buy some more, 99 bottles of Beer on the wall.");
  }
  else if ($i == 1) {
    $li.text($i+" bottle of Beer on the wall, " + $i + " bottle of Beer. Take one down and pass it around, "+ ($i-1) +" bottle of Beer on the wall.");
  }
  else{
    $li.text($i+" bottles of Beer on the wall, " + $i + " bottles of Beer. Take one down and pass it around, "+ ($i-1) +" bottles of Beer on the wall.");
  }
  $fragment.append($li);
};

$element.append($fragment);
