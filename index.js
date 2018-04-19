const takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return 'You are number ' + katzDeliLine.length + ' in the line';
};