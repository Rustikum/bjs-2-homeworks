"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d = b**2-4*a*c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
      let x = -b/(2*a);
      arr.push(x);
  } else if (d > 0) {
    let x = (-b + Math.sqrt(d) )/(2*a);
    let y = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x, y);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let S = amount - contribution;
  let n = countMonths
  let payment = S * (p + (p / ((1 + p)**n - 1)));
  let sum = +(payment * countMonths).toFixed(2);
  return sum; 
  }
// S * (P + (P / (((1 + P)^n) - 1)))