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
    line = 'The line is currently: ';
    for (let i = 0; i<katzDeliLine.length; i++){
      if(i === katzDeliLine.length - 1){
      line + (i + 1) + '.' + katzDeliLine[i];
      }
      else{
        line + (i + 1) + '.' + katzDeliLine[i] + ", ";
      }
    }
  
    return line
  }
  return 
}