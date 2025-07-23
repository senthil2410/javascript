const persons=[
    {name:'Senthil',age:25,place:"Palani",native:true},
    {name:'Kumar',age:24,place:"Dharapuram",native:false},
    {name:'Thanagaraj',age:52,place:"Udumlapet",native:true},
    {name:"BabySudha",age:48,place:"Coimbatore",native:false},
    {name:'Abinaya',age:18,place:"Pollachi",native:true},
];

persons.forEach(person=>
{
    console.log(person.name);
}
);

const native= persons.filter(person=>
    {  
        return person.native==false
    });
console.log(native);

const native1=persons.filter(person=>person.native);
console.log(native1);

const captilizeName=persons.map(person=>
{
    return person.name.toUpperCase();
}
);
console.log(captilizeName);

const allNative=persons.every(person=>person.native);

console.log(allNative);


const age18=persons.every(person=>person.age>=18);

console.log(age18);

const updatedName=persons.map(person=>
{
    const {age,...rest} =person
   return person.name==="Senthil"?{...rest,age:22}:person;
}
);

console.log(updatedName);

const {firstPerson,secondPerson,...restPerson}=persons;

console.log(firstPerson);

console.log(secondPerson);

console.log(restPerson);

const updatedPersons={...restPerson,firstPerson,secondPerson};

console.log(updatedPersons);

const updateObject={age:29,...firstPerson,place:"Kodaikanal"};

console.log(updateObject);

