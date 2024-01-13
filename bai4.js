

function findMinMax() {
    var num1 = parseInt(prompt("Nhập số thứ nhất:"));
    var num2 = parseInt(prompt("Nhập số thứ hai:"));
    var num3 = parseInt(prompt("Nhập số thứ ba:"));
  
    var min = Math.min(num1, num2, num3);
    var max = Math.max(num1, num2, num3);
  
    console.log("Giá trị nhỏ nhất là: " + min);
    console.log("Giá trị lớn nhất là: " + max);
  }
  findMinMax();
  
  
  
  