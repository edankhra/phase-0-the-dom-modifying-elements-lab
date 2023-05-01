// Write your code here!
/*const main = document.querySelector("#main");
main.remove();

const newHeader = document.createElement('h1');
document.body.append(newHeader);

newHeader.setAttribute("id", "victory");
newHeader.textContent = "Ekta is the champion";
console.log(newHeader);*/



// remove the 'main#main' node
const mainNode = document.querySelector('#main');
mainNode.remove();

// create a new header with an id of 'victory'
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

// add text to the new header
newHeader.textContent = ' Ekta is the champion';

// add the new header to the document body
const bodyNode = document.querySelector('body');
bodyNode.appendChild(newHeader);