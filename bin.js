
var regex = {
  //General
  ls: /^ls$/,
  pwd: /^pwd$/,
  clear: /^clear$|^cls$/,
  help: /^help$/,
  time: /^time$/,
  name: /^name/,
  machine: /^machine/,
  reload: /^reload$|^re$/,
  credits: /^credits$/,
  time: /^time$/,
  exit: /^exit$/,
  easteregg: /^42$/,
  //URLs
  youtube: /^ytb$|^youtube$/i,
  openClassrooms: /^Oc$|^openclassrooms$/i,
  facebook: /^fb$|^facebook$/i,
  messenger: /^mesg$|^messenger$/i,
  github: /git|github/i,
  //Search
  rYoutube: /-y/,
  rWikipedia: /-w/,
  rOpenClassrooms: /-oc/,
  rTrad: /-trad|-traduction/i,
  rGoogle: /-g/i,
  rURL: /-a|-url/i
};


function command(){

  var inputs = document.querySelectorAll("#input");
  var commandLine = inputs[inputs.length - 1].value;

  //match of commandLine
  if (commandLine.match(regex.ls)){ls();}
  else if (commandLine.match(regex.help)){ls();}
  else if (commandLine.match(regex.clear)){clear();}
  else if (commandLine.match(regex.name)){rename(commandLine);}
  else if (commandLine.match(regex.machine)){renameMachine(commandLine);}
  else if (commandLine.match(regex.reload)){reload();}
  else if (commandLine.match(regex.credits)){credits();}
  else if (commandLine.match(regex.pwd)){pwd();}
  else if (commandLine.match(regex.time)){time();}
  else if (commandLine.match(regex.exit)){exit();}
  else if (commandLine.match(regex.easteregg)){easteregg();}

  else if (commandLine.match(regex.youtube)){youtube();}
  else if (commandLine.match(regex.openClassrooms)){openClassrooms();}
  else if (commandLine.match(regex.facebook)){facebook();}
  else if (commandLine.match(regex.messenger)){messenger();}
  else if (commandLine.match(regex.github)){github();}

  else if (commandLine.match(regex.rYoutube)){rechercheYoutube(commandLine);}
  else if (commandLine.match(regex.rWikipedia)){rechercheWikipedia(commandLine);}
  else if (commandLine.match(regex.rOpenClassrooms)){rechercheOpenClassrooms(commandLine);}
  else if (commandLine.match(regex.rTrad)){rechercheTrad(commandLine);}
  else if (commandLine.match(regex.rGoogle)){rechercheGoogle(commandLine);}
  else if (commandLine.match(regex.rURL)){accesURL(commandLine);}

  else if (commandLine == ""){}
  else{
    var asw = document.createElement("p");
    asw.setAttribute('id', 'output');
    asw.setAttribute('class', 'text');
    asw.setAttribute('fontFamily', 'monospace');
    var txt = document.createTextNode("Command '" + commandLine +"' is not found. Type 'ls' for  all commands.     :(");
    asw.appendChild(txt);

    var inputs = document.querySelectorAll("#input");
    inputs[inputs.length-1].parentNode.appendChild(asw);
  }
}


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
  document.querySelector('html').setAttribute('background', 'url(background42.jpg) no-repeat center center fixed');
}


  //URLs
function youtube(){
window.open('https://www.youtube.com');
exit();
}

function openClassrooms(){
window.open('https://openclassrooms.com/courses');
exit();
}

function facebook(){
window.open('https://www.facebook.com');
exit();
}

function messenger(){
window.open('https://www.facebook.com/messages/t/');
exit();
}

function github(){
  window.open('http://github.com/' + gitProfile);
  exit();
}


  //Search
function rechercheYoutube(recherche){
  recherche = recherche.replace(' -y', '');
  recherche = recherche.replace(' ', '+');
  window.open('https://www.youtube.com/results?search_query=' + recherche);
  exit();
}

function rechercheWikipedia(recherche){
  recherche = recherche.replace(' -w', '');
  recherche = recherche.replace(' ', '%20');
  window.open('https://www.wikiwand.com/fr/' + recherche);
  exit();
}

function rechercheOpenClassrooms(recherche){
  recherche = recherche.replace(' -oc', '');
  recherche = recherche.replace(' ', '+');
  window.open('https://openclassrooms.com/courses?q=' + recherche);
  exit();
}

function rechercheTrad(recherche){
  recherche = recherche.replace(/-trad|-traduction/i, '');
  recherche = recherche.replace(' ', '%20');
  window.open('https://translate.google.fr/#auto/' + recherche);
  exit();
}

function rechercheGoogle(recherche){
  recherche = recherche.replace(/-g/, '');
  recherche = recherche.replace(' ', '+');
  window.open('http://google.fr/search?q=' + recherche);
  exit();
}

function accesURL(url){
  url = url.replace(/ -a| -url/i, '');
  window.open('http://'+url);
  exit();
}
