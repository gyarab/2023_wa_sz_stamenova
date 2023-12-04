let el = document.getElementById('game')
let counter = 5

function f() {
    el.innrHTML = counter;
    counter--;
    if (counter>0) {
        setTimeout(f, 3000);
    }
}
setTimeout(f,1000);
el.innerHTML="New game";

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');

function clickCard1() {
    card1.innerHTML = '<img src="apple.jpg" alt="card1">'
}
function clickCard2() {
    card2.innerHTML = '<img src="banana.jpg" alt="card2">'
}
function clickCard2() {
    card3.innerHTML = '<img src="pear.jpg" alt="card2">'
}
function clickCard2() {
    card4.innerHTML = '<img src="iorange.jpg" alt="card2">'
}