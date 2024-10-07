var arrOdd = [1, 3, 5, 7, 9, 'odd'];

var arrEven = [2, 4, 6, 8, 10, 'even'];

// console.log(arrEven);

// arrEven[4] = arrEven[4] + 2;

// console.log(arrEven);

// var arr = [12, 'Iron Man', true, 15.5];

// console.log(arr[1]);

// arr[1] = "Spider Man";

// console.log(arr.length); //4

//console.log(arr.indexOf(15)); //-1 in case missing

// arr.pop();
// console.log(arr); //[12, 'Iron Man', true]

// arr.push(100);
// console.log(arr); //[12, 'Iron Man', true, 15.5, 100]

// arr.shift();
// console.log(arr); //['Iron Man', true, 15.5]

// arr.unshift(100);
// console.log(arr); //[100, 12, 'Iron Man', true, 15.5]


var myNewArr = arrOdd.concat(arrEven);
console.log(myNewArr);