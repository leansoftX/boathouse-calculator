function calculator(str) {
  var reg = /^(\d+)(\+|-|\*|\/)(\d+)$/;
  var result = reg.exec(str);
  if (result) {
    var num1 = parseInt(result[1]);
    var num2 = parseInt(result[3]);
    var operator = result[2];
    var res = 0;
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
        break;
    }
    return res;
  } else {
    return "输入的字符串不符合要求";
  }
}


