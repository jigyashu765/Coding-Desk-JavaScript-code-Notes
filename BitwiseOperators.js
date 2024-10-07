// Bitwise Operators

// convert 5 & 6 in to binnary

// 1 Stand for true;
// 0 stand for false;

// 5 = 1 0 1;
// 6 = 1 1 0;

// 4 = 1 0 0;


// 101 = 1*2^2 + 0*2^1 + 1*2^0 = 4 + 0 + 1 = 5;

// 100 = 1*2^2 + 0*2^1 + 0*2^0 = 4 + 0 + 0 = 4;

// 111 = 1*2^2 + 1*2^1 + 1*2^0 = 4 + 2 + 1 = 7;

// 011 = 


// And
// var res = (5 & 6);
// console.log(res);


// 5 = 101;
// 6 = 110;
// 7 = 111


//OR
// var res = (5 | 6);
// console.log(res);

// 5 = 101;
// 6 = 110;
// 3 = 011;


//XOR
// var res = (5 ^ 6);
// console.log(res);


// NOT

// 5 = 101;
//  =  010;

// var res = (~5);
// console.log(res);

// Left Shift (<<)
//     a    b
var res = (5 << 3);
// a*(2^b);
// 5*(2^3);
// 5*8 = 40;

// 5 = 101;
// 3 = 000;
// 40= 101000;


// console.log(res); // 40


// Right Shift (>>)
//         a     b
var res = (10 >> 2);

// a / (2^b)
// 10 / (4) = 2.5

// 5 = 1010;
// 2 = 0;
// 2= 10;


console.log(res); // 1