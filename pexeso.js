let el = document.getElementById('game');
el.innerHTML = 'New game';

let counter = 0;
let counterMin = 0

let flipped = 0;

const found = [0, 0, 0, 0, 0, 0];
const exist = [0, 0, 0, 0, 0, 0];
let all = 0;

let backImg = '<img src="mandala1.jpg" alt="">';

const imgChanger = ['<img src="img/apple.jpg" alt="">', '<img src="img/banana.jpg" alt="">', '<img src="img/pear.jpg" alt="">',
                    '<img src="img/orange.jpg" alt="">'];
const cards = [document.getElementById('card1'), document.getElementById('card2'), document.getElementById('card3'), 
                document.getElementById('card4'), document.getElementById('card5'), document.getElementById('card6'),
                document.getElementById('card7'), document.getElementById('card8')];

let dif = Math.floor(Math.random()*4);

function  generator(){
    dif = Math.floor(Math.random()*4);
    while(exist[dif] == 2){
        dif = Math.floor(Math.random()*4);
    }
    exist[dif]++;
    return dif;
}

function myFnc(){
    if(counter < 10){
        el.innerHTML = "timer:" + counterMin + ": 0" + counter;
        counter++;
    }
    else{
        el.innerHTML = "timer:" + counterMin + ":" + counter;
        counter++;
    }
    if(counter < 40){
        setTimeout(myFnc, 1000);
    }
    if(counter == 40){
        counter = 0;
        setTimeout(myFnc, 1000);
        counterMin++;
    }
    if(counterMin == 40){
        document.write("page ended")
    }
}

setTimeout(myFnc, 1000);

const  index = [generator(), generator(), generator(), generator(), 
            generator(), generator(), generator(), generator()]; 


let before = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function call(){
    let i = 0;
    while(i < 8){
        if(before[i] == 1){
            clickCard(i);
        }
        i++;
    }
    
} 
function clickCard(cardIndex){
    cards[cardIndex].innerHTML = imgChanger[index[cardIndex]];
    flipped ++;
    found[index[cardIndex]]++;
    before[cardIndex] = 1;

   if(flipped == 2 && (found[index[cardIndex]] >= 2 || found[index[cardIndex]] == 3)){
        flipped = 0;
        cards[cardIndex].removeAttribute("onclick");
        before[cardIndex] = 0;
        call();
    }
    else if(flipped == 2 && found[index[cardIndex]] == 1){
        cards[cardIndex].innerHTML = backImg;
        before[cardIndex] = 0;
        flipped = 0;
        found[index[cardIndex]] = 0;
        call();
    }else if(flipped == 1 && found[index[cardIndex]] == 2 ){
        cards[cardIndex].innerHTML = backImg;
        before[cardIndex] = 0;
        flipped = 0;
        found[index[cardIndex]] = 0;
        call();
    }else if(flipped == 1 && found[index[cardIndex]] == 3 ){
        before[cardIndex] = 0;
        flipped = 0;
        all++
    }
    if(all == 6){
        document.write("winner ")
    }
}