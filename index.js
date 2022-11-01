function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}
function findGCD(arr, n) {
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    result = gcd(arr[i], result);

    if (result == 1) {
      return 1;
    }
  }
  return result;
}
let arr = [2, 4, 6, 8, 16];
let n = arr.length;
console.log(findGCD(arr, n));
document.write(findGCD(arr, n) + '<br>');
