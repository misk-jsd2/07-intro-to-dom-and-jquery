

var $mysong = $('#lyrics');
	var $lli = $(document.createDocumentFragment());


	for (var i = 99; i >= 0; i--) {
	  var $myli = $('<li></li>');
	  if (i >1 ) {
      $myli.text(i+" bottle of coke on the wall, " + i + " bottle of coke. Take one down and pass it around, "+ (i-1) +" bottle of coke on the wall.");
	  }
	  else if (i == 1) {
      $myli.text(i+" bottles of coke on the wall, " + i + " bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.");

	  }
	  else{
      $myli.text("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");

	  }
	  $lli.append($myli);
	};

	$mysong.append($lli);
