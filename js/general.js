
//General
/*
  ls/help, name, machine, re
*/
function ls(){

var ls_general = [  'clear',
                    'ls',
                    'help',
                    'name',
                    'machine',
                    'reload',
                    'exit'];

var ls_url = [      'Youtube',
                    'Openclassrooms',
                    'Facebook',
                    'Messenger',
                    'GitHub'];

var ls_search = [   '[youtube] -y',
                    '[wikipedia] -w',
                    '[openclassrooms] -oc',
                    '[traduction] -trad',
                    '[google] -g',
                    '[url] -a'];

window.termCommands = [ls_general, ls_url, ls_search];

var asw = document.createElement('p');
asw.setAttribute('id', 'output');
asw.setAttribute('class', 'text');

asw.innerHTML = "<strong>general :</strong></br> &nbsp;" + ls_general.join(' > ');
asw.innerHTML += "<strong></br>URLs :</strong></br> &nbsp;" + ls_url.join(' > ');
asw.innerHTML += "<strong></br>researchs :</strong></br> &nbsp;" + ls_search.join(' > ');

var inputs = document.querySelectorAll("#input");
inputs[inputs.length-1].parentNode.appendChild(asw);
}

function clear(){
var prompts = document.querySelectorAll("#prompt");
var output = document.querySelectorAll("#output");
var l = prompts.length;

for (i=0; i<l; i++){
  prompts[i].remove();
}

l = output.length;
if (l){
  for (i=0; i<l; i++){
    output[i].remove();
  }
}
}

function rename(newName){
newName = newName.replace('name ', '');
newName = newName.replace(' ', '-');
user = newName;
}

function renameMachine(newName){
newName = newName.replace('machine ', '');
newName = newName.replace(' ', '-');
machine = newName;
}

function reload(){
location.reload();
}

function credits(){

var txt =   "                        ___</br>";
txt +=      "                     .-'   `'.</br>";
txt +=      "                    /         \\</br>";
txt +=      "                    |         ;</br>";
txt +=      "                    |         |           ___.--,</br>";
txt +=      "           _.._     |0) ~ (0) |    _.---'`__.-( (_.</br>";
txt +=      "    __.--'`_.. '.__.\\    '--. \\_.-' ,.--'`     `\"\"`</br>";
txt +=      "   ( ,.--'`   ',__ /./;   ;, '.__.'`    __</br>";
txt +=      "   _`) )  .---.__.' / |   |\\   \\__..--\"\"  \"\"\"--.,_</br>";
txt +=      "  `---' .'.''-._.-'`_./  /\\ '.  \\ _.-~~~````~~~-._`-.__.'</br>";
txt +=      "        | |  .' _.-' |  |  \\  \\  '.               `~---`</br>";
txt +=      "         \\ \\/ .'     \\  \\   '. '-._)</br>";
txt +=      "          \\/ /        \\  \\    `=.__`~-.</br>";
txt +=      "          / /\\         `) )    / / `\"\".`\\</br>";
txt +=      "    , _.-'.'\\ \\        / /    ( (     / /</br>";
txt +=      "     `--~`   ) )    .-'.'      '.'.  | (</br>";
txt +=      "            (/`    ( (`          ) )  '-;</br>";
txt +=      "             `      '-;         (-'</br>";
txt +=      "</br>               -= code by TERRUSS =-";
txt +=      "</br>                github.com/TERRUSS";


var asw = document.createElement('p');
asw.innerHTML = txt;
asw.setAttribute('class', 'text');
asw.setAttribute('id', 'output');

var term = document.querySelector("#termContainer");
term.appendChild(asw);
}

function pwd(){

var asw = document.createElement('p');
asw.innerHTML = ("Guess what? You'r currently in your navigator... !");
asw.setAttribute('class', 'text');
asw.setAttribute('id', 'output');

var term = document.querySelector("#termContainer");
term.appendChild(asw);
}

function time(){

var date = new Date();
var str_clock = "It's ";
str_clock += date.getHours();    //clock
str_clock += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
str_clock += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();

var asw = document.createElement('p');
asw.setAttribute('class', 'text');
asw.setAttribute('id', 'output');
asw.appendChild(document.createTextNode(str_clock));

var term = document.querySelector('#termContainer');
term.appendChild(asw);
}

function exit(){
window.close();
}


function easteregg(){
document.querySelector('html').setAttribute('background', 'url(images/background42.jpg) no-repeat center center fixed');
}
