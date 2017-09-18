
function autocomplete(){

  var inputs = document.querySelectorAll('#input');
  var input = inputs[inputs.length-1];

  console.log("star autocomplete()");

  for (i in termCommands){
    for (j in termCommands[i]){
      if (termCommands[i][j].indexOf(input) > -1){
        console.log("autocomplete success! \\o/");
        input.value = termCommands[i][j];
      }
    }
  }

}
