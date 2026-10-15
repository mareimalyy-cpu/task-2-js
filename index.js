 
// push() بتضيف عنصر ف اخر ال اراي
// pop() بتحذف اخر عنصر 
// // shift ()بتحذف اول عنصر 
// .at بترجع العنصر تاني 
// .splaice بتعمل كل حاجه


 const users = [
 {
    name: "mareim",
    password: "12345"
 },
 {
    name: "roma",
    password: "12345"
 }
 ];

 function showName(){
    for ( let i = 0; i< users.length; i++ ){
        console.log(`${users[0].name} => ${users[0].password}`);
    }
 }
 showName();
//   \



// Task: (choose the right answer) 1- What is the output in console:
if (true) { var x = 10; }
console.log(x);  
A. undefined 
B. 10    
C. null
D. error
 // ( right answer is "B") //  
//  --------------------------------------
2- What is the output in console:
console.log(x);
var x = 10;
A. undefined
B. 10 
C. null 
D. error
// ( right answer is "A") //
//  ------------------------------------
3- What is the output in console:
console.log(x);
const x = 10;
A. undefined 
B. 20 
C. null 
D. error
// ( right answer is "D") //
// -----------------------------
4- What is the output in console:
function test() { var x = 20; }
test();
console.log(x);
A. undefined 
B. 20 
C. null 
D. error
// ( right answer is "D") //
// ----------------------
5- What is the output in console:
sayHello();
function sayHello() { console.log("Hello"); }
A. undefined 
B. "Hello" 
C. null 
D. error
// ( right answer is "B") //
// ---------------------------------
6- What is the output in console:

var x = 10;

function test() {
    console.log(x);

    var x = 20;
}

test();

A. undefined
B. 10
C. 20
D. erro
// ( right answer is "A") //
// ---------------------------------
7- What is the output in console:

var x = 1;

function test() {
    console.log(x);

    if (true) {
        var x = 2;
    }

    console.log(x);
}

test();

A. undefined - 2
B. 2 - 2
C. undefined - undefined
D. error - 2
// ( right answer is "A") //
// --------------------------------
8- What is the output in console:

let x = 10;

function outer() {
    let x = 20;

    function inner() {
        let x = 30;
        console.log(x);
    }

    inner();
    console.log(x);
}

outer();
console.log(x);

A. 30 - 20 - 10
B. 10 - 20 - 30
C. 10 - 30 - 30
D. 10 - 20 - 20
// ( right answer is "A") //
// --------------------------------
9- 

var x = 10;

{
    let x = 20;

    {
        var x = 30;
    }

    console.log(x);
}

console.log(x);

A. 10 - 20
B. 10 - 30 
C. 10 - undefined 
D. 10 - error
// ( right answer is "D") //
