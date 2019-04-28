

var $song = $('#lyrics');
	var $lli = $(document.createDocumentFragment());


	for (var n = 99; n >= 0; n--) {
	  var $mylist = $('<li></li>');
	  if (n >1 ) {
      $myli.text(n+" bottle of coke on the wall, " + n + " bottle of coke. Take one down and pass it around, "+ (n-1) +" bottle of coke on the wall.");
	  }
	  else if (n == 1) {
      $mylist.text(n+" bottles of coke on the wall, " + n + " bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.");

	  }
	  else{
      $mylist.text("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");

	  }
	  $lli.append($mylist);
	};

	$song.append($lli);
