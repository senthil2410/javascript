const sname="Senthil Kumar";

console.log(sname);

console.log(sname.length);

console.log(sname[0]);
console.log(sname.at(0));

console.log(sname[1]);

console.log(sname[12]);

console.log(sname.includes("kumar"));

console.log(sname.startsWith("Senthil"));

console.log(sname.endsWith("kumar"));

const para="MERN stack training";

console.log(para.indexOf("stack"));

const firstoccurance=para.indexOf("stack");

console.log(para.indexOf("stack",firstoccurance+1));


console.log(sname.slice(8));

console.log(sname.slice(0,8));

const para1="Iam learning Javascript";

console.log(para1.split(" "));

const words=para1.split(" ");

console.log(words.join('-'));

console.log(sname.toUpperCase());

console.log("SENTHIL@GMAIL.COM".toLowerCase());

const id=125
console.log(id.toString());

const sentence= "Iam to palani ";

console.log(sentence.replace("to","from"));

const wrongSentence="7/9-O Arima Nagar Chenni,Chenni District";

console.log(wrongSentence.replaceAll("Chenni","Chennai"));


const list=document.createElement("ul");

const students=["Suresh","RAMESH","Senthil","Kumar","Raina"];

for(let student of students)
{
    if(student)
    {
        const listContext=document.createElement("li");
        listContext.textContent=student;
        list.appendChild(listContext);
    }
}