//Plantilla para google kickstart 2020
const fs = `
3
AKICKSTARTPROBLEMNAMEDKICKSTART
STARTUNLUCKYKICK
KICKXKICKXSTARTXKICKXSTART`;
const input = fs.trim().split('\n');

var currentline = 0;
function readline(){
    return input[currentline++];
}

var T = readline();
for(var i = 1; i <= T; i++){
    console.log(`Case #${i}: ${solve(readline().split(' '))}`);
}

function solve (S) {
    S = S.toString();
    var lucky = 0;
    var k = S.split('KICK');
    var len = k.length;
    for (var i = 1; i < len; i++) {
        k.shift();
        for (var j = 0; j < k.length; j++) {
            lucky += k[j].split('START').length - 1;
        }
    }
    
    return lucky;
}
