const guessnumber=document.getElementById('userchoice');
const guessform=document.querySelector(".guessform");


const guesses=document.getElementById("guesses");
const result=document.querySelector(".result");
const clue=document.querySelector(".clue");


const randomnumber=Math.floor(Math.random()*100)+1;

let guessCount=1;

let resetbutton;


guessform.addEventListener("submit",(event)=>
{
    event.preventDefault();
    const userguess=Number(guessnumber.value);
    checkguess(userguess);
})

function checkguess(userguess)
{
    if(guessCount==1)
    {
        guesses.textContent="Previous guess ";
    }

      guesses.innerHTML += `<strong>${userguess}</strong> `;



    if(userguess==randomnumber)
    {
        result.textContent="you have identified the number crctly";
        result.className="result success";
        clue.textContent=''
        gameOver();
    }
    else if (guessCount==10)
    {
        result.textContent="!! Game Over !! The  number was "+randomnumber;
        result.className="result fail";
        clue.textContent='';
        gameOver();
    }
    else
    {
          result.textContent="You failed guess the number";
          result.className="result fail";

          if(userguess<randomnumber)
          {
            clue.textContent='Your guess is lesser than the random-number';
          }
          else
          {
            clue.textContent="Your guess is greater than the  random-number"
          }

    }

   guessCount++;
   guessnumber.value='';
   guessnumber.focus();


}

function gameOver()
{
    guessnumber.disabled=true;
    guessform.querySelector('button').disabled=true;

    resetbutton=document.createElement('button');
    resetbutton.textContent="Reset Button";
    resetbutton.className = "reset-btn";
    resetbutton.style.marginTop="10px";
    guessform.parentNode.appendChild(resetbutton);

    resetbutton.addEventListener("click",resetGame)
}


function resetGame()
{
    guessCount=1;
   
    guesses.textContent = '';
     result.textContent = '';
    clue.textContent = '';

    resetbutton.remove();
    guessnumber.disabled=false;
    guessform.querySelector('button').disabled=false;

    guessnumber.value='';
    guessform.focus();
    result.className="result"

      window.location.reload();

}




