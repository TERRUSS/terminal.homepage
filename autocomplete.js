
function autocomplete(){

  var list =['ls', 'help', 'clear', 'cls', 'name']

  var inputs= document.querySelectorAll('#input');
  var input = inputs[inputs.length-1];
  var nb_commands = regex.length;

  for (i=0; i<nb_commands; i++){
    if (input.value == regex[i]){
      console.log(regex[i]);
    }
  }
}
