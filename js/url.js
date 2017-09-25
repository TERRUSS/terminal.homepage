
//URLs
function youtube(recherche, newTab){
window.open('https://www.youtube.com');
if (recherche.match(newTab)){
  window.focus();}
else{
  exit();}
}

function openClassrooms(recherche, newTab){
window.open('https://openclassrooms.com/courses');
if (recherche.match(newTab)){
  window.focus();}
else{
  exit();}
}

function facebook(recherche, newTab){
window.open('https://www.facebook.com');
if (recherche.match(newTab)){
  window.focus();}
else{
  exit();}
}

function messenger(recherche, newTab){
window.open('https://www.facebook.com/messages/t/');
if (recherche.match(newTab)){
  window.focus();}
else{
  exit();}
}

function github(recherche, newTab){
window.open('http://github.com/' + gitProfile);
if (recherche.match(newTab)){
    window.focus();}
else{
    exit();}
}
