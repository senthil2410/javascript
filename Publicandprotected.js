class Student{
    name;
    id;
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
    }

    getInfo()
    {
        console.log(`The Student name is ${this.name} and his roll number is ${this.id}`);
    }
}

const student1=new Student("Senthil",201132);

student1.getInfo();


class Bank
{
    _balance;
    constructor(initialBalance=0)
    {
           this._balance=initialBalance;
    }

    _withDrawal(amount)
    {
        if(amount>this._balance)
        {
            console.log("Not Suficient amount");
            this.#balanceCheck();
        }
        else{
            this._balance=this._balance-amount;
            console.log(`${amount} is withdrawn sucessfully`)
        }
    }

    _deposit(amount)
    {
        this._balance=this._balance+amount;
        console.log(`${amount} is deposited sucessfully`)
    }

    #balanceCheck()
    {
        console.log(`${this._balance}`);
    }

}

class Atm extends Bank 
{

    constructor(initialBalance)
    {
        super(initialBalance)
    }

    withdrawAtm(amount)
    {
        this._withDrawal(amount);
    }

    depositAtm(amount)
    {
        this._deposit(amount);
    }

}

const atmuser=new Atm(5000);

atmuser.withdrawAtm(3000);
atmuser.depositAtm(4000);