// var myBtn = document.getElementById('btn');

// myBtn.addEventListener('dblclick', function(){
//     alert("Button 2 time Clicked");
// })

// var myBox = document.getElementById('myBox');

// document.addEventListener('keypress', function (e) {
//     if (e.key == 'r' || e.key == 'R') {
//         myBox.style.backgroundColor = 'red';
//     } else if (e.key == 'o' || e.key == 'O') {
//         myBox.style.backgroundColor = 'orange';
//     } else if (e.key == 'b' || e.key == 'B') {
//         myBox.style.backgroundColor = 'blue';
//     }

// })


// document.addEventListener("keypress", function (e){
//     if (e.key == 'Enter') {
//         alert("Enter pressed")
//     }
// })




// r = red
// o = orange
// b = blue

// myBox.addEventListener('mouseenter', function(){
//     console.log("mouse enter")
// })

// myBox.addEventListener('contextmenu', function(){
//     console.log("open context menu")
// })


// var MyForm = document.getElementById('myFirstForm');

// MyForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     // console.log(MyForm);

//     var formData = new FormData(MyForm);

//     formData.forEach((element, key) => {
//         console.log(key + " -> "+element);
//     });

// });


// MyForm.addEventListener('reset', function(e){
//     var userSelection = confirm("Do you want to reset");

//     // ok = yes = True
//     // cancle = no = false
    
//     if (userSelection){

//     } else {
//         e.preventDefault();
//     }
// })

// MyForm.addEventListener("input", function(){

//     var formData = new FormData(MyForm);

//     console.log(formData.get("myName"));

// })

// MyForm.addEventListener("select", function(){

//     console.log("select");

// });

// var myInput = document.getElementById('myInput');
// myInput.addEventListener('input', function(){
//     console.log(myInput.value);
// });

var myBtn = document.getElementById('btn');

myBtn.addEventListener('click', checkNetwork());


function checkNetwork(){
    var mystatus = document.getElementById('status');

    if(navigator.onLine){
        mystatus.textContent = 'Online'
    } else {
        mystatus.textContent = "Offline"
    }
}

window.addEventListener('online');
