const  fruits=[];

fruits.push("Apple","Orange","Bannana","Mango");

console.log(fruits);


const vegtables=Array.of("Tomato","Potato","Carrot");

console.log(vegtables);


 const names=["Thangaraj","Senthil","Kumar","Abinaya"];

 const employess=Array.from(names);

 console.log(employess);



function arrayChecking(element)
{
    if(Array.isArray(element))
    {
        console.log("Array Element");
    }
    else
    {
        ////
    }
}

arrayChecking(names);




const cities=["Chennai","Mumabi","Kolkata","Bangluru","Kochin","Hyderbad"];

cities.indexOf(2);

cities.indexOf(4);


cities.includes("chennai");

cities.includes("Coimbatore");

console.log(cities.join(" "));

console.log(cities.join(" - "));

const prices=[1500,2000,2000,1800,1500];

console.log(prices.lastIndexOf(2000));


console.log(prices.copyWithin(1,3));

console.log(prices.toLocaleString());

const passedStudents=new Array(5).fill("passed",1,4);

console.log(passedStudents);

console.log(prices.sort());

console.log(prices.sort((a,b)=>b-a));


// _______________________________________________



const Rollnumber=[1,2,3,5,10,12,13,15,17,20,25,27,29,32];

console.log(Rollnumber.slice(5));

console.log(Rollnumber.slice(1,5));

const hall2=Rollnumber.splice(1,5);

console.log(hall2);


console.log(Rollnumber);

//----------------------------------------------------------------


const studentID=[1,41,3,16,10,12,32,15,17,27,25,14,29,31];
const ReverseId=studentID.toReversed();

console.log(ReverseId);

console.log(studentID);

const sortId=studentID.toSorted((a,b)=>b-a);

console.log(sortId);


//---------------------------------------


const salaries=[4000,5000,6000,7500,9000,15000,17500];

salaries.forEach(salary=>console.log(salary));


const doubleSalaries=salaries.map((salary)=>
{
     return salary*2;
})


console.log(doubleSalaries);


const above7K=salaries.filter((salary)=>
{
    return salary>7000;
})


console.log(above7K);


const upiPayments=[25,30,40,45,100,25,52,12,16];

const totalAmount=upiPayments.reduce((acc,value)=>
{
    return acc+value
},0)

console.log(totalAmount);


const stationary=["scale","pencil","pen","scale","pen"];


const totalStationary=stationary.reduceRight((acc,val)=>
{
    acc[val]=(acc[val]||0)+1;

    return acc;
},{});

console.log(totalStationary);


console.log(upiPayments.every(payment=>payment>50));

console.log(upiPayments.some(payment=>payment>50));

