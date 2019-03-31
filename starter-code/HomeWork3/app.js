function addToList(list, newThing) {
	var list = document.createElement('li');
	var list_value = document.createTextNode(newThing);
	list.appendChild(list_value);
	document.body.appendChild(list);

 }

 window.onload = function() {

 	for (var i=99; i>=0; i--) {
		if (i===0) {
			var A1=('No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.');
		}
		if (i===1) {
			var A2=(i + ' bottle of coke on the wall, '+ i +' bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.')
		}
		if (i===2) {
			var A3=(i + ' bottles of coke on the wall, '+ i +' bottles of coke. Take one down and pass it around, '+ (i-1) +' bottle of coke on the wall.')
		}
		if (i>2) {
			var A4=(i + ' bottles of coke on the wall, '+ i +' bottles of coke. Take one down and pass it around, '+ (i-1) +' bottles of coke on the wall.')
     		var main_list = document.getElementById("lyrics");
     		addToList(main_list,A4);
		}
	}
     var main_list = document.getElementById("lyrics");
     addToList(main_list,A1);
     addToList(main_list,A2);
     addToList(main_list,A3);
