const Student=
{
    name:["Thanagarj","chinappan"],
    age:45,
    introduce:function()
    {
        console.log(`Hi this is ${this.name[0]}`);
    }
}

console.log(Student.name);


const Student1=
{
    name:{first:"Abinaya",last:"Thangaraj"},
    age:17,
     greet:function()
    {
        console.log(`Hi this is ${Student1["name"]["last"]}`);
    }
}


console.log(Student1["name"]);

console.log(Student1["name"]["last"]);

function employee(debt)
{
    const obj={};
    
    obj.dept=debt;
    obj["name"] = {};
    obj["name"]["first"] = "Baby";
    obj["name"]["last"] = "Sudha";
    obj.introduce=function()
    {
         console.log(`Hi this is ${this.name.first} ${this.name.last}`)
    }
    return obj;
}

const csedept=employee("cse");

console.log(csedept);

csedept.introduce();

const ecedept=employee("ece");

console.log(ecedept);

ecedept.introduce();





