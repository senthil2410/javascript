
//Arthmetic operator 

const num1=5;

const num2=6;

console.log(num1+num2);

console.log(num1-num2);

console.log(num1*num2);

console.log(num1/num2);

console.log(num1%num2);

console.log(num1**2);


//logical operaor


if(num1 && num2)
{
    console.log("Logical AND opertor");
}

if(num1 || num2)
{
    console.log("Logical AND opertor");
}


if(!num1)
{
    console.log("Logical NOT operator")
}


const isLoggedin=true;

const isAdmin=false;

if(isAdmin&&isLoggedin)
{
    console.log("Admin is allowed to acces admin page only if both condition satifies");
}

if(isAdmin||isLoggedin)
{
    console.log("here logedin value is true so user can acces the  application");
}

function logout()
{

}

if(!Loggedin)
{
    logout();
}



//Relational operator


const student1=97;

const student2=85;

if(student1>student2)
{
    console.log("student1 is highest mark");
}
else if(student1<student2)
{
    console.log("student2 has highest mark ");
}
else
{
    console.log("Both students are equal marks");
}


if(student1<=35)
{
    console.log("Student failed");
}

if(student>=35)
{
    console.log("Student paused");
}


let marks=90;

let grade=(marks>80) ? "pass" :"fail";

console.log(marks);

const password="1234"

const inputpassword=1234;    //lose checking

if(password==inputpassword)
{
    console.log("password is correct");
}
else{
    console.log("incorrect");
}


if(password===inputpassword)
{
    console.log("password is correct");    //strict checking
}
else{
    console.log("incorrect")
}


switch(true)
{
    case(student1>=90):
    console.log("A grade");
    break;
    case(student1<90 && student1>=80):
    console.log("B grade");
    break;
    case(student1<80 && student1>=70):
    console.log("C grade");
    break;
    case(student1<70 && student1>=50):
    console.log("D grade");
    break;
    case(student1<50 && student1>=35):
    console.log("D grade");
    break;
    default:
    console.log("Fail");

}

//increment and decrement operator


console.log(++4);

console.log(4++);

console.log(--4);

console.log(4--);


