var color1but = document.getElementById('color1');
var color2but = document.getElementById('color2');
var color3but = document.getElementById('color3');
var color4but = document.getElementById('color4');
var color5but = document.getElementById('color5');
var color6but = document.getElementById('color6');
var color7but = document.getElementById('color7');
var Number = 0;
var rowcount = 0;

color1but.addEventListener('click', set1);
color2but.addEventListener('click', set2);
color3but.addEventListener('click', set3);
color4but.addEventListener('click', set4);
color5but.addEventListener('click', set5);
color6but.addEventListener('click', set6);
color7but.addEventListener('click', set7);

function set1(){
    Number = 1;
    console.log(color1but, set1);
}function set2(){
    Number = 2;
    console.log(color2but, set2);
}function set3(){
    Number = 3;
    console.log(color3but, set3);
}function set4(){
    Number = 4;
    console.log(color4but, set4);
}function set5(){
    Number = 5;
    console.log(color5but, set5);
}function set6(){
    Number = 6;
    console.log(color6but, set6);
}function set7(){
    Number = 0;
    console.log(color7but, set7);
}

/*for(I = 0; I < 16; I++){

    var Ele = document.createElement("div");
    Ele.className = "color";
    Ele.id = "colorr";
    document.body.appendChild(Ele);
}
*/
for(j = 0; j < 12; j++) {
    for (i = 1; i < 5; i++) {
        var bol = document.createElement('DIV');
        bol.id = "row_"+(j+1)+"_Bol_" +i;
        bol.classList.add("bols");
        document.getElementById('SV').appendChild(bol);
        bol.addEventListener('click', changecolor);
        bol.mmColor = 0;
    }
}
for(nakijkrow = 0; nakijkrow < 12; nakijkrow++) {
    var nakijkvierkant = document.createElement('DIV');
    nakijkvierkant.classList.add("nakijkVierkant");
    document.getElementById('nakijkveld').appendChild(nakijkvierkant);
    for (nakijkbol = 0; nakijkbol < 4; nakijkbol++) {
        var nbol = document.createElement('DIV');
        nbol.id= "row_" + (nakijkrow + 1) + "bol_" + (nakijkbol + 1);
        nbol.classList.add("nakijkBol");
        nakijkvierkant.appendChild(nbol )
    }
}

var click = document.getElementsByClassName("color");

for (i = 0; i < click.length; i++) {
    click[i].addEventListener('click', changecolor);
}

function changecolor(event){
    console.log("werkt");
    console.log(Number);
    event.target.style.backgroundColor = colors[Number];
    event.target.mmColor = Number;
    console.log(event.target.mmColor);
}

function guessing(){
    rowcount++;
    console.log(rowcount);
    for(i=0;i<4;i++) {
        var element = document.getElementById("row_" + rowcount + "_Bol_" + (i + 1));
       guess[i] = element.mmColor;
      // console.log("row_" + rowcount + "_Bol_" + (i + 1));
       console.dir(guess);
    }
    check(guess, answer);
}

function check(guess, answer){
    if(guess.length < answer.length){
        return false;
   }
var answerCopy = [];
    for(i = 0; i < answer.length; i++){
        answerCopy[i] = answer[i];
    }
var checked = [];
    for(i = 0; i < guess.length; i++){
        if(answer[i] === guess[i]) {
         checked[i] = "black";
         answerCopy[i] = -1;

        }
    }
    for(i = 0; i < guess.length; i++){
        for(j=0; j < answer.length; j++){
            if(answerCopy[i] != -1) {
                if (guess[i] == answer[j]) {
                    checked[i] = "white";
                    answerCopy[j] = -1;
                }
                else {
                    checked[i] = "red";
                }
            }
        }
    }
    changenakijkbol(checked);
    //return checked;
}

function changenakijkbol(checked) {
    for (i = 0; i < 4; i++) {
        var bolletje = document.getElementById("row_" + rowcount + "bol_" + (i + 1)).style.backgroundColor = checked[i];
    }
}
var colors = ["white","red", "orange", "yellow", "green", "blue", "purple"];
var answer = [];
var guess = [];

for(var i=0; i<4; i++){
    var colorNum = 1 + Math.floor(Math.random()*5);
    answer[i]=colorNum;
}
console.log(answer);
