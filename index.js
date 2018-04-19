const takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return 'Welcome, '+ newPerson + '. You are number ' + katzDeliLine.length + ' in line.';
};

const nowServing = (katzDeliLine) => {
  let currentlyServed = '';
 
  if (katzDeliLine.length > 0) {
    currentlyServed = katzDeliLine[0];
    katzDeliLine.shift();
    return 'Currently serving ' + currentlyServed + '.';
  }
  return 'There is nobody waiting to be served!';
};

const currentLine = (katzDeliLine) => {
  if (katzDeliLine.length > 0){
    line = []
    for (let i = 0; i<katzDeliLine.length; i++){
      
      
    }
  }
}