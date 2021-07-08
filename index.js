const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names,) {
  let message = [];
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }

  return message;
}

writeCards(names); 

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
}