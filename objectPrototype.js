const Person={
    name:"Senthil",
    greet:(function()
    {
       console.log(`Hi Iam ${this.name}`);
    })()
}



// console.log(Person.hasOwnProperty("name"));

// console.log(Person.isPrototypeOf("name"));

// console.log(Person.valueOf("name"));

// console.log(Person.toLocaleString("name"));

// // shadowing properities
const myDate=new Date(2024,12,2);

console.log(myDate);

// myDate.getTime=()=>
// {
//     console.log("Overiding the buildin function");
// }

// myDate.getTime();

// //using createObject 

// const employeePrototype =
// {
//      intro :function(name,dept)
//      {
//        console.log(`Hi this is ${name} fron ${dept}`)
//      }
// }

// const  object =Object.create(employeePrototype);

// object.intro("Senthil","Eie");

