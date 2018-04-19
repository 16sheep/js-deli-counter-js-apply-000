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

const currentLine = 