var click = -1;
var click2 = -1;
var click3 = -1;
var click4 = -1;
var colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange"

];

var but1 = document.getElementById('button1');
var but2 = document.getElementById('button2');
var but3 = document.getElementById('button3');
var but4 = document.getElementById('button4');
var div1= document.getElementById('1');
var div2 = document.getElementById('2');
var div3 = document.getElementById('3');
var div4 = document.getElementById('4');
but1.addEventListener('click', change1);
but2.addEventListener('click', change2);
but3.addEventListener('click', change3);
but4.addEventListener('click', change4);

function change1() {
    click += 1;
    but1clr();
    if(click === 1){
        but1.style.backgroundColor = colors[1];

    } else if(click === 2){
        but1.style.backgroundColor = colors[2];

    } else if(click === 3){
        but1.style.backgroundColor = colors[3];

    } else if(click === 4){
        but1.style.backgroundColor = colors[4];

    } else if(click === 5){
        but1.style.backgroundColor = colors[5];

    } else if(click === 6){
        but1.style.backgroundColor = colors[6];

    } else if(click === 0){
        but1.style.backgroundColor = colors[0];

    } else if(click >= 6) {
        but1_color = 0;
        click = -1;
    }

}
function change2() {
    but2_color += 1;
    click2 += 1;
    if(click2 === 1){
        but2.style.backgroundColor = colors[1];
    } else if(click2 === 2){
        but2.style.backgroundColor = colors[2];
    } else if(click2 === 3){
        but2.style.backgroundColor = colors[3];
    } else if(click2 === 4){
        but2.style.backgroundColor = colors[4];
    } else if(click2 === 5){
        but2.style.backgroundColor = colors[5];
    } else if(click2 === 6){
        but2.style.backgroundColor = colors[6];
    } else if(click2 === 0){
        but2.style.backgroundColor = colors[0];
    } else if(click2 >= 6) {
        but2_color = 0;
        click2 = -1;
    }

}
function change3() {
    click3 += 1;
    but3_color += 1;
    if(click3 === 1){
        but3.style.backgroundColor = colors[1];
    } else if(click3 === 2){
        but3.style.backgroundColor = colors[2];
    } else if(click3 === 3){
        but3.style.backgroundColor = colors[3];
    } else if(click3 === 4){
        but3.style.backgroundColor = colors[4];
    } else if(click3 === 5){
        but3.style.backgroundColor = colors[5];
    } else if(click3 === 6){
        but3.style.backgroundColor = colors[6];
    } else if(click3 === 0){
        but3.style.backgroundColor = colors[0];
    } else if(click3 >= 6) {
        but3_color = 0;
        click3 = -1;
    }

}
function change4() {
    but4_color +=1;
    click4 += 1;
    if(click4 === 1){
        but4.style.backgroundColor = colors[1];
    } else if(click4 === 2){
        but4.style.backgroundColor = colors[2];
    } else if(click4 === 3){
        but4.style.backgroundColor = colors[3];
    } else if(click4 === 4){
        but4.style.backgroundColor = colors[4];
    } else if(click4 === 5){
        but4.style.backgroundColor = colors[5];
    } else if(click4 === 6){
        but4.style.backgroundColor = colors[6];
    } else if(click4 === 0){
        but4.style.backgroundColor = colors[0];
    }else if(click4 >= 6) {
        but4_color = 0;
        click4 = -1;
    }
}

function but1clr(){
    but1_color++;
}
function submit(){
    var ikleuren = [but1_color, but2_color, but3_color, but4_color];
    var code = [kleur1, kleur2,kleur3,kleur4];
    var divs = [div1, div2, div3, div4];
    for(i = 0; i < ikleuren.length; i++){
        for(j = 0; j < code.length; j++) {
            if (ikleuren[i] == code[i]) {
                if(i == j){
                    divs[i].style.backgroundColor = "black";
                } else{
                    divs[i].style.backgroundColor = "White";
                }
            } else {
                divs[i].style.backgroundColor = "red";
            }
        }
    }
}


var but1_color = -0;
var but2_color = -0;
var but3_color = -0;
var but4_color = -0;

var kleur1 = Math.floor((Math.random() * 6) +1);
var kleur2 = Math.floor((Math.random() * 6) +1);
var kleur3 = Math.floor((Math.random() * 6) +1);
var kleur4 = Math.floor((Math.random() * 6) +1);
