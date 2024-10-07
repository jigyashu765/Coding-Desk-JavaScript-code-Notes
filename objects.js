// Object Literal Notation
var person = {
    //Key   sep Value
    firstName: "Tony",
    lastName: "Stark",
    castName: "Iron Man",
    age: 30,
    isSuperhero: true
};

//Add property form outside of objects
// person.isSuperhero = true;

// console.log(person);

//Aceesing the value from object

// console.log(person.castName);

// console.log(person['firstName']);

// console.log(person['firstName'] + " " +person.lastName);


var car = {
    company : "Mahindra",
    Modal : 'XUV',
    colors : ['Green', 'White', 'Red'], //Array
    details : {
        speed: '150 km/h',
        milage : "20km/l",
        mDate : 2024
    } // object
}

// console.log(`A famous company Name ${car.company}, who make a beautful modal ${car.Modal}. which come in many colors like ${car.colors[0]} and ${car.colors[2]}. if i talk about milage then it is ${car.details.milage}, and top spped is approx ${car.details.speed}. it was developed in year ${car.details.mDate}.`)

// car.details.exDate = [2025, 2026];

delete car.colors;

console.log(car);