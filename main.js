window.onload = function() {




    // button = document.getElementById('new-thing-button');

    //   event.preventDefault();
  
     
    button_add = document.getElementById('fav-list');
    // button_value = document.getElementById('new-thing').value;
    // document.getElementById('new-thing').value = ''
  


    for (i = 99; i >0; i--) {
        var main_heading = document.createElement("li");
   
   
       if (i == 2) {
   
        //    console.log(`${i} bottles of coke on the wall, ${i} bottles of coke. Take one down and pass it around, ${i-1} bottle of coke on the wall.`)
           var heading_text = document.createTextNode(`${i} bottles of coke on the wall, ${i} bottles of coke. Take one down and pass it around, ${i-1} bottle of coke on the wall.`);
   
       }
       
       else if (i == 1) {
   
        //    console.log(`${i} bottle of coke on the wall, ${i} bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.`)
           var heading_text = document.createTextNode(`${i} bottle of coke on the wall, ${i} bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.`);

        //    console.log('No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.')
           var heading_text = document.createTextNode('No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.');

           
   
       }
       else {

        
        var heading_text = document.createTextNode(`${i} bottles of coke on the wall, ${i} bottles of coke. Take one down and pass it around, ${i-1} bottles of coke on the wall.`);
     
        
   
        //    console.log(`${i} bottles of coke on the wall, ${i} bottles of coke. Take one down and pass it around, ${i-1} bottles of coke on the wall.`)
   
   
   
   
   
       }

       main_heading.appendChild(heading_text);
       button_add.appendChild(main_heading);
     
     
   
   
    }
  
    
  
  
     
     
  };
  