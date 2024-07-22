// not using default parameter
function say(message){
    message =  typeof message === 'undefined' ? 'Hi' : message
    console.log(message)
}

say('hello')  // hello
say()   // undefined or Hi


// using default parameter
function say2(message = 'Hi'){
    console.log(message)
}

say2('hello2222')
say2()
///////Deepika repeat starts here 
//https://www.w3schools.com/js/js_comparisons.asp
console.log('Deepika repeat starts here**************');
function say1(message)
{
    console.log(typeof message)
    message = typeof message === undefined ? "Deepika is correct" : message
    console.log(message)
   var msg2= 'undefined'==='undefined' ? "2 is correct" : 'wrong'
   console.log(msg2)
}
//say1('hello')
say1() //how does it work
say1('undefined')
