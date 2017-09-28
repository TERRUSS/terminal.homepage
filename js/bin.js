
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
  note: /^note$/,
  //URLs
  youtube: /^ytb$|^youtube$|^ytb -nt$|^youtube -nt$/i,
  openClassrooms: /^Oc$|^openclassrooms$|^Oc -nt$|^openclassrooms -nt$/i,
  facebook: /^fb$|^facebook$|^fb -nt$|^facebook -nt$/i,
  messenger: /^mesg$|^messenger$|^mesg -nt$|^messenger -nt$/i,
  github: /^git$|^github$|^git -nt$|^github -nt$/i,
  //Search
  rYoutube: / -y/,
  rWikipedia: / -w/,
  rOpenClassrooms: / -oc/,
  rTrad: / -trad| -traduction/i,
  rGoogle: / -g/i,
  rURL: / -a| -url/i,
  //Options
  newTab: / -nt$/
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
  else if (commandLine.match(regex.note)){note();}

  else if (commandLine.match(regex.youtube)){youtube(commandLine, regex.newTab);}
  else if (commandLine.match(regex.openClassrooms)){openClassrooms(commandLine, regex.newTab);}
  else if (commandLine.match(regex.facebook)){facebook(commandLine, regex.newTab);}
  else if (commandLine.match(regex.messenger)){messenger(commandLine, regex.newTab);}
  else if (commandLine.match(regex.github)){github(commandLine, regex.newTab);}

  else if (commandLine.match(regex.rYoutube)){rechercheYoutube(commandLine, regex.newTab);}
  else if (commandLine.match(regex.rWikipedia)){rechercheWikipedia(commandLine, regex.newTab);}
  else if (commandLine.match(regex.rOpenClassrooms)){rechercheOpenClassrooms(commandLine, regex.newTab);}
  else if (commandLine.match(regex.rTrad)){rechercheTrad(commandLine, regex.newTab);}
  else if (commandLine.match(regex.rGoogle)){rechercheGoogle(commandLine, regex.newTab);}
  else if (commandLine.match(regex.rURL)){accesURL(commandLine, regex.newTab);}

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
