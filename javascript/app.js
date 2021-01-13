//Typing
const texts = ['Front End', 'Back End', 'Web Developer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function Typing(){
    if(count === texts.length){ count = 0;}
    currentText = texts[count];
    letter = currentText.slice(0, ++index); //Sub Text

    document.querySelector('.type').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(Typing, 300);
};
Typing();


