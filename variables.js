console.log(num);

var num;  //  old way it is has serveral disadavtages;

num=1;

console.log(num);


//console.log(age);    it will give an error before declerartion we are using the  let variable

let age=19;     // let can used to  dyanmic data like counting events

console.log(age);

//console.log(name);      it will give an error before declerartion we are using the  const variable

const name="senthil";   // if variable cannot be  reassigned or redecleared.

console.log(name);

// Both var and const are temp dead zone before decleration


const numbers=[1,2,3,4,5];  // use const most of the time if you know the reassignment will happen it that case prefer let.


const studets={
             name:"senthil",
             age:18,
             email:"senthil@gmail.com",
             updateEmail:function(newEmail)
             {
                this.email=newEmail;
                console.log(this.email);
             }
            }

studets.updateEmail("kumar@gmail.com");


