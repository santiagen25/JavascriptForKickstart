//Plantilla para google kickstart 2020
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

var currentline = 0;
function readline(){
    return input[currentline++];
}

var T = readline();
for(var i = 1; i <= T; i++){
    var N = readline().split(' ');
    var ints = [];
    for (var j = 0; j < N; j++) ints[j] = readline().split(' ');
    console.log(`Case #${i}: ${solve(N, ints)}`);
}

function solve (N, cp) {
    var pico = 0;
	for (var i = 0; i < cp.length; i++) {
	    if (i !== 0 && i != cp.length-1) {
	        if(cp[i] > cp[i-1] && cp[i] > cp[i+1]) {
    	        pico = i;
	        }
	    }
	}
	
	return cp[pico];
}


//simplified N and A¡

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

var currentline = 0;
function readline(){return input[currentline++];}

var T = readline();
for(var i = 1; i <= T; i++){console.log(`Case #${i}: ${solve(readline().split(' '), readline().split(' '))}`);}

function solve (N, A) {
	return null;
}

//simplified N, X and A

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

var currentline = 0;
function readline(){
    return input[currentline++];
}

var T = readline();
for(var i = 1; i <= T; i++){
    var [N, X] = readline().split(' ');
    console.log(`Case #${i}: ${solve(N, X, readline().split(' '))}`);
}

function solve (N, X, A) {
    var B = [];
    var C = "";
    
    for(var uwu = 0; uwu < parseInt(N); uwu++) C = C + A[uwu] + "," + uwu + ";";
    
    var k = 0;
    while (k < C.split(";").length-1){
        if (parseInt(C.split(";")[k].split(",")[0]) <= parseInt(X)) {
            //Perfecto, ya sale de la cola
            B.push(parseInt(C.split(";")[k].split(",")[1]) + 1);
        } else {
            C = C + (parseInt(C.split(";")[k].split(",")[0]) - parseInt(X)) + "," + C.split(";")[k].split(",")[1] + ";";
        }
        k++;
    }
	
	return B.join(" ");
}



//Correct Template

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

var currentline = 0;
function readline(){
    return input[currentline++];
}

var T = readline();
for(var i = 1; i <= T; i++){
    var [N, X] = readline().split(' ');
    var A = readline().split(' ');
    console.log(`Case #${i}: ${solve(N, X, A)}`);
}

function solve (N, X, A) {
    return null;
}