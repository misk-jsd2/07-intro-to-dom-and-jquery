

(function() {
	var fragment = document.createDocumentFragment();
	var counter = 99 ;
	var line ='', listItem ='';

	do {
		listItem = document.createElement("li");
		if (counter ==1){
			line =`${counter} bottle of coke on the wall,${counter} bottle of coke. Take one down and pass it around, no more bottle of coke on the wall.`;
			listItem.appendChild(document.createTextNode(line));
		}
		else {
			line =`${counter} bottles of coke on the wall,${counter} bottles of coke. Take one down and pass it around,${(counter-1)} bottles of coke on the wall.`;
			listItem.appendChild(document.createTextNode(line));
		}
		fragment.appendChild(listItem);
		counter-=1
	} while (counter >= 1);
	listItem = document.createElement("li");
	line =`No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.`;
	listItem.appendChild(document.createTextNode(line));
	fragment.appendChild(listItem);
	document.querySelector('#lyrics').appendChild(fragment);
})();