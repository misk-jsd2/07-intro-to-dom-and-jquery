function addToList(list, newThing) 
{
	var list = document.createElement("li");
	var h3 = document.createElement("h3");
	var new_word = document.createTextNode(newThing);
	h3.appendChild(new_word);
	list.appendChild(h3);
	document.body.appendChild(list);
}

window.onload = function() 
{
	var list = document.getElementById("bottles");
	for (var i=99; i>=0; i--) 
	{
		if(i>2) {
			var word=(i+' bottles of coke on the wall, '+i+' bottles of coke. Take one down and pass it around, '+(i-1)+' bottles of coke on the wall.');
     		addToList(list,word);
     	}
     	if (i==2) {
			var two=(i+' bottles of coke on the wall, '+i+' bottles of coke. Take one down and pass it around, '+(i-1)+' bottle of coke on the wall.');
			addToList(list,two);
		}
		if (i==1) {
			var one=(i+' bottle of coke on the wall, '+i+' bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.');
			addToList(list,one);
		}
		if (i==0) {
			var NM=('No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.');
			addToList(list,NM);
		}
	}
};