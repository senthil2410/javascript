const { jsx } = require("react/jsx-runtime");


const jsonString = `{
  "name": "Senthil",
  "age": 25,
  "skills": ["JavaScript", "HTML", "CSS"]
}`;

const user = JSON.parse(jsonString);

console.log(user.name);    

console.log(user.age);  

console.log(user.skills[1]);  

console.log(user.skills[2]);





const superHeroes={
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
};


console.log("Squad", superHeroes.squadName); 


console.log("Members", superHeroes.members.length); 

const jsonData=JSON.stringify(superHeroes);

console.log(jsonData);

const stringLiteral=JSON.parse(jsonData);

console.log(stringLiteral);

fetch("https://fakestoreapi.com/products/1")
.then(response=>
{
      if(!response.ok)
      {
        throw new Error("There is an error while fecting the data");
      }
      return response.json();
})
.then(data=>
{
  console.log(data)
})
.catch(err=>
{
   console.log("error",err);
});
 











