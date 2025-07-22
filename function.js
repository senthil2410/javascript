//buildin functions


const sentence="Iam from Dharapuram";

const mySentence=sentence.replace("Dharapuram","Palani");

console.log(mySentence);

const address=["7/9-O","Arima-nagar","Palani","Dindigul District"];

const myaddress=address.join(" "); // here space is optional parameters

console.log(address.join());

console.log(myaddress);


// methods

console.log(Math.PI);

console.log(Math.floor(2.6));


// optional  and default parameter

function greeting(name="guest")
{
    console.log(`Welcome ${name}`);
}

greeting("Senthil");
greeting();


// immeditae invoke function expression

(async function()
{
    const bankBalance=0;
     console.log(bankBalance);
})();



(()=>
{
   console.log("IIFE functions");
}) () ;

// scopes

const outer_x=2;

function inner()
{
    const innner_y=5;
    console.log(innner_y);
    console.log(outer_x);
}

console.log(outer_x);

inner();
//console.log(innner_y);  reference error will occur it is not accesible out side the function


// Anonymous  functions

setTimeout(function()
{
   console.log("The function will fun after 2 seconds");
},2000)

// arrow functions

const addition=(a,b)=>
{
   return a+b;
}

console.log(addition(4,5));

const subtraction=(a,b)=>b-a;

console.log(subtraction(5,10));