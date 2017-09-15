  //Golbals
var user = 'user';
var machine = 'local';

  // Script

init();

document.addEventListener('keydown', function(e){
  if (e.keyCode == 13){ //'Enter' key
    command();  //Check command-line matching
    newLine();  //Create new prompt
  }


  if (e.keyCode == 9){ //'Tab' key
    e.preventDefault();

    autocomplete();
  }
});




//  Functions


function init() {
  //enable autofocus on the initial input
  document.getElementById('input').focus();

  //enable clack&date

  window.onload=function() {

    function refresh() {
      var date = new Date();
      var str_clock = date.getHours();    //clock
      str_clock += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
      str_clock += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
      var str_date = date.getDay();
      str_date += '/'+(date.getMonth()<10?'0':'')+date.getMonth();
      str_date += '/'+date.getFullYear(); //date

      document.getElementById('clock').innerHTML = str_clock;
      document.getElementById('date').innerHTML = 'DATE &nbsp' + str_date;
    }
    refresh();
    setInterval(refresh,1000);
  }
}


function newLine(){
  //Creation of the new prompt line
  var prompt = document.createElement('p');
  var input = document.createElement('input');

  prompt.innerHTML = '<span>' + user + '@' + machine + ':~$ </span>';
  prompt.setAttribute('id', 'prompt');
  prompt.setAttribute('class', 'text');
  input.setAttribute('id', 'input');
  input.setAttribute('class', 'text');
  input.setAttribute('spellcheck', 'false');


  //Insertion of the line
  prompt.appendChild(input);
  document.getElementById('termContainer').appendChild(prompt);

  //Toggle autofocus
  inputs = document.querySelectorAll('#input');
  l = inputs.length;

  if (l>1){
    inputs[l-2].blur();
  }
  inputs[l-1].focus();
}
