

var mathString = "( ( a + b ) *  ( g - e ) )";

var wrongMathString = "( ( a + b ) *   g - e ) )";

const verifyBrackets = string => {
  let firstStack = [];

  let stringArr = string.split("");
  console.log("arr ", stringArr);

  stringArr.forEach(elem => {
    console.log("elem", elem);
    if (elem === "(") {
      firstStack.push(elem);
      console.log("whut", elem, firstStack);
    }
    if (elem === ")") {
      if (firstStack.length <= 0) {
        return false;
      }
      firstStack.pop();
    }
    console.log("stack", firstStack);
  });

  return firstStack.length === 0;
};

let isExpression = verifyBrackets(mathString);

console.log("Expression is correct:", isExpression);

let isExpression2 = verifyBrackets(wrongMathString);

console.log("Expression is correct:", isExpression2);
