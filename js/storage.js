
  function note(){
    var term = document.querySelector("#termContainer");

    var asw = document.createElement('p');
      asw.setAttribute('id', 'output');
      asw.setAttribute('class', 'text');


    asw.innerHTML = '=== NOTE ===<br>';
    asw.innerHTML+= '[1] new note<br>';
    asw.innerHTML+= '[2] edit note<br>';
    asw.innerHTML+= '[3] remove note<br>';
    asw.innerHTML+= '[4] remove all notes<br>';

    term.appendChild(asw);
    newLine(true);

    var input = document.querySelectorAll('#input');

    switch (note) {
      case 1:
        newLine(true);
        var note = input[input.length-1].value;

        webStockage.setItem('cle', note);
        console.log(webStockage.cle);
        break;
      default:
        alert("Tu est bien nul");
        console.log;
    }
  }
