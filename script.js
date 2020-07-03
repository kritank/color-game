
function makeColourValue()
{
    return Math.round(Math.random()*255);
}

function setButtonColour(button, red, green, blue){
    button.setAttribute('style','background-color: rgb('+ red +','+ green +','+ blue +');');
}

const heading = document.getElementById('colourValue');
const buttons = document.getElementsByClassName('colourButton');
const answerMessage = document.getElementById('answer');
const answerButton = Math.round(Math.random() * (buttons.length - 1));

document.getElementById('resetButton').addEventListener('click', startGame);

  function startGame() {
  answerMessage.innerHTML = "";

  for (var i = 0; i < buttons.length; i++) {

    let red = makeColourValue();
    let green = makeColourValue();
    let blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `RGB (${red}, ${green}, ${blue})`;
    }

    buttons[i].addEventListener('click', function(){
        
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = "Correct!";
        } else {
            answerMessage.innerHTML = "Wrong answer! Guess again!";
            setTimeout(func,1500);
        }
    });

  }

}
function func(){answerMessage.innerHTML="";}
startGame();
