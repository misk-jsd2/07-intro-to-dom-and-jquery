

 window.onload = function(){

  //var bottlesong = document.createElement("li");
 

  var bottles;
  var sen;
for (count = 99; count >= 1; count = count - 1) 
{
  var bottlesong = document.createElement("li");
    if (count == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    
     sen = document.createTextNode(count+" "+bottles+" of coke on the wall.");
    bottlesong.appendChild(sen)
     document.getElementById('bottlesong').appendChild(bottlesong);
    if (count < 99) {
     sen = document.createTextNode(count+" "+bottles+" of coke on the wall.");
     bottlesong.appendChild(sen)
     document.getElementById('bottlesong').appendChild(bottlesong);
    }
    
     sen = document.createTextNode(count+" "+bottles+" of coke."+ "Take one down and pass it around, ");
     bottlesong.appendChild(sen)
     document.getElementById('bottlesong').appendChild(bottlesong);
    
    if (count == 1) {
      
     sen = document.createTextNode("No more bottles of coke on the wall, no more bottles of coke. Go to the sotre and buy some more, 99 bottles of coke on the wall.");
     bottlesong.appendChild(sen)
     document.getElementById('bottlesong').appendChild(bottlesong);
      }
}
  
  }