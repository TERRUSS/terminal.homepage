
//Search
function rechercheYoutube(recherche, newTab){
var testNewTab=recherche.match(newTab)

recherche = recherche.replace(' -y', '');
recherche = recherche.replace(' ', '+');
recherche = recherche.replace('-nt', '');

window.open('https://www.youtube.com/results?search_query=' + recherche);
if (testNewTab){
    window.focus();}
else{
    exit();}
}

function rechercheWikipedia(recherche, newTab){
var testNewTab=recherche.match(newTab)

recherche = recherche.replace(' -w', '');
recherche = recherche.replace(' ', '%20');
recherche = recherche.replace('-nt', '');

window.open('https://www.wikiwand.com/fr/' + recherche);
if (testNewTab){
  window.focus();}
else{
  exit();}
}

function rechercheOpenClassrooms(recherche, newTab){
var testNewTab=recherche.match(newTab)

recherche = recherche.replace(' -oc', '');
recherche = recherche.replace(' ', '+');
recherche = recherche.replace('-nt', '');

window.open('https://openclassrooms.com/courses?q=' + recherche);
if (testNewTab){
  window.focus();}
else{
  exit();}
}

function rechercheTrad(recherche, newTab){
var testNewTab=recherche.match(newTab)

recherche = recherche.replace(/-trad|-traduction/i, '');
recherche = recherche.replace(' ', '%20');
recherche = recherche.replace('-nt', '');

window.open('https://translate.google.fr/#auto/' + recherche);
if (testNewTab){
  window.focus();}
else{
  exit();}
}

function rechercheGoogle(recherche, newTab){
var testNewTab=recherche.match(newTab)

recherche = recherche.replace(/-g/, '');
recherche = recherche.replace(' ', '+');
recherche = recherche.replace('-nt', '');

window.open('http://google.fr/search?q=' + recherche);
if (testNewTab){
  window.focus();}
else{
  exit();}
}

function accesURL(url, newTab){
var testNewTab=url.match(newTab)

url = url.replace(/ -nt/i, '');
url = url.replace(/ -a| -url| -nt/i, '');
window.open('http://'+url);

if (testNewTab){
  window.focus();}
else{
  exit();}
}
