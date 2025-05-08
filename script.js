function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let expr = document.getElementById('display').value;
  try {
    expr = expr.replace(/sqrt/g, "Math.sqrt")
               .replace(/sin/g, "Math.sin")
               .replace(/cos/g, "Math.cos")
               .replace(/tan/g, "Math.tan")
               .replace(/log/g, "Math.log")
               .replace(/\^/g, "**");
    const result = eval(expr);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = "Error";
  }
}
