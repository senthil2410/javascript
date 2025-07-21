const fruits=["apple","orange","mango","pineapple","grapes"];

for(const fruit of fruits)
{
    console.log(fruit);
}


function filterFruit(fruit)
{
      return fruit.endsWith("e");
}

const lFruit=fruits.filter(filterFruit);

console.log(lFruit);



const UpperFruit=fruits.map(fruit=>fruit.toUpperCase());

console.log(UpperFruit);


for(let i=0;i<5;i++)
{
    console.log(fruits[i]);
}

let fruitlist="the fruits are "

for(const fruit of fruits)
{
    fruitlist+=`${fruit},`;
}
console.log(fruitlist);

let favouriteFruit="My favourite fruits are ";

// for(let i=0;i<fruits.length;i++)
// {
//     if(i==fruits.length-1)
//     {
//         favouriteFruit+=`${fruits[i]}.`
//     }
//     else{
//          favouriteFruit+=`${fruits[i]} ,`
//     } 
// }
//console.log(favouriteFruit);




// let i=0;
// while(i<fruits.length)
// {
//      if(i==fruits.length-1)
//     {
//         favouriteFruit+=`${fruits[i]}.`
//     }
//     else{
//          favouriteFruit+=`${fruits[i]} ,`
//     } 

//     i++;
// }

// console.log(favouriteFruit);




let intilize=0;
do{
     if(intilize==fruits.length-1)
    {
        favouriteFruit+=`${fruits[intilize]}.`
    }
    else{
         favouriteFruit+=`${fruits[intilize]} ,`
    } 

    intilize++;
}while(intilize<fruits.length);

console.log(favouriteFruit);