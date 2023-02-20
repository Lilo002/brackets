module.exports = function check(str, bracketsConfig) {
  const brPair = {
    [')'] : '(',
    ['}'] : '{',
    ['|'] : '|',
    [']'] : '[',
    ['2'] : '1',
    ['4'] : '3',
    ['6'] : '5',
    ['7'] : '7',
    ['8'] : '8',
  };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if((currentSymbol === '|' && stack.includes('|')) || (currentSymbol === '7' && stack.includes('7')) || (currentSymbol === '8' && stack.includes('8'))) {
      stack.pop();
    }else {
      if(currentSymbol === '(' || currentSymbol === '{' || currentSymbol === '[' || currentSymbol === '1' || currentSymbol === '3' || currentSymbol === '5' || currentSymbol === '|' || currentSymbol === '7' || currentSymbol === '8') {
            stack.push(currentSymbol);
        } else {

          if(stack.length === 0) {
            return false;
          }
          let topElement = stack[stack.length - 1];

          if(brPair[currentSymbol] === topElement) {
            stack.pop();
          } else {
            return false;
          }
        }
        } 
      } return stack.length === 0;  
};
