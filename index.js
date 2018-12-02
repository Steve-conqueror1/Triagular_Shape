function drawShape(length) {
  var shape = "";
  for (var i = 1; i <= length; i++) {
    for (var j = 1; j <= i; j++) {      
      shape += "#";
    }
    shape += "\n";
  }
  return shape;
}
console.log (drawShape(5));