

for (var i = 99; i >= 0; i--) {
    var a = i - 1;
    if (i !== 1 && i !== 0) {
        // console.log(i + " bottles of coke on the wall " + i + " bottles of coke. Take one down and pass it around," + a + " bottles of coke on the wall. ");
        // $('#fa').append('<li> i + "bottles of coke on the wall " + i + " bottles of coke. Take one down and pass it around," + a + " bottles of coke on the wall."</li>');
        $('#fa').append('<li>'+ i + 'bottles of coke on the wall ' + i + ' bottles of coke. Take one down and pass it around,' + a + ' bottles of coke on the wall.</li>');



    }
    if (i === 1) {
        console.log(i + " bottle of coke on the wall " + i + " bottle of coke. Take one down and pass it around, no more bottles of coke on the wall")
        $('#fa').append('<li>' + i + 'bottle of coke on the wall ' + i + ' bottle of coke. Take one down and pass it around, no more bottles of coke on the wall</li>');

    }
    if (i === 0) {
        console.log("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.")
        $('#fa').append('<li>' +  'No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.</li>');

    }

}
