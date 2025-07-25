class Bank
{
    balance;
    constructor(balance)
    {
       this.balance=balance;
    }
    checkBalance()
    {
        console.log(`The current balance is ${this.balance}`);
    }
}

const account1=new Bank(1200);

account1.checkBalance();


class Person 
{
    name;
    constructor(name)
    {
        this.name=name;
    }
}


class Subject extends Person 
{
    teaches;
    constructor(name,teaches)
    {
        super(name);
        this.teaches=teaches;
    }

    grade()
    {
        console.log(`${this.name} mark in ${this.teaches} is ${(Math.floor(Math.random()*90))}`);
    }
}

const Subject1=new Subject("Senthil","Maths");

Subject1.grade();


class BankAccount
{
    _balance;
    name;

    constructor(initialBalance=0)
    {
    
       this._balance=initialBalance;
    }


    withDraw(amount)
    {
        if(this._balance>=amount)
        {
          this._balance=this._balance-amount;
          console.log(`${amount} is withdrawn sucessfully`);
        }
        else
        {
            console.log(`${this.#checkBalance()} Not Sufficient balance to withdraw ${amount}`);
        }
    }

    deposit(amount)
    {
        this._balance=this._balance+amount;
         console.log(`${amount} is deposited sucessfully`);

    }

    #checkBalance()
    {
       return this._balance;
    }
}

const bank=new BankAccount(1000);

bank.withDraw(1001);
bank.withDraw(100);
console.log(bank.balance);
bank.withDraw(900);
bank.deposit(101);


class ATM extends BankAccount
{
    deposit(amount)
    {
        this._balance=this._balance+amount;
        console.log("Amount deposited sucessfully");
        console.log(this._balance);
    }
    withDraw(amount)
    {
        if(this._balance>=amount)
        {
          this._balance=this._balance-amount;
          console.log(`${amount} is withdrawn sucessfully`);
        }
        else
        {
            console.log(`Not Sufficient balance to withdraw ${amount}`);
        }
    }



}

const atm=new ATM();

atm.deposit(1000);
atm.deposit(1000);

atm.withDraw(1000);










