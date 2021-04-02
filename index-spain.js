var clicks = 0;
var countryNames = document.getElementById("names");

//Shows and hides country names
function showNames() {
    
    if (countryNames.style.display === "block") {
      countryNames.style.display = "none";
    } else {
      countryNames.style.display = "block";
    }
  }

//Changes to color on 1st click
function changeColor(event) { 
    clicks++

    if (clicks == 1)  {
      event.target.style.fill = "#DA4567";
  }
    if (clicks == 2) {
        event.target.style.fill = "#7aeb34";
   }
    if (clicks == 3) {
        event.target.style.fill = "#ffe70a";
}
    if (clicks == 4) {
        event.target.style.fill = "#ba0afa";
}
    if (clicks == 5) {
        event.target.style.fill = "#FFFFFF";
        clicks = 0;
}
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
//JSON saving
function save(num){
  var saveobj = {
    'ESA': document.getElementById('ESA').style.fill,
    'ESAB': document.getElementById('ESAB').style.fill,
    'ESAL': document.getElementById('ESAL').style.fill,
    'ESAV': document.getElementById('ESAV').style.fill,
    'ESB': document.getElementById('ESB').style.fill,
    'ESBA': document.getElementById('ESBA').style.fill,
    'ESBI': document.getElementById('ESBI').style.fill,
    'ESBU': document.getElementById('ESBU').style.fill,
    'ESC': document.getElementById('ESC').style.fill,
    'ESCA': document.getElementById('ESCA').style.fill,
    'ESCC': document.getElementById('ESCC').style.fill,
    'ESCO': document.getElementById('ESCO').style.fill,
    'ESCR': document.getElementById('ESCR').style.fill,
    'ESCS': document.getElementById('ESCS').style.fill,
    'ESCU': document.getElementById('ESCU').style.fill,
    'ESGC': document.getElementById('ESGC').style.fill,
    'ESGI': document.getElementById('ESGI').style.fill,
    'ESGR': document.getElementById('ESGR').style.fill,
    'ESGU': document.getElementById('ESGU').style.fill,
    'ESH': document.getElementById('ESH').style.fill,
    'ESHU': document.getElementById('ESHU').style.fill,
    'ESJ': document.getElementById('ESJ').style.fill,
    'ESL': document.getElementById('ESL').style.fill,
    'ESLE': document.getElementById('ESLE').style.fill,
    'ESLO': document.getElementById('ESLO').style.fill,
    'ESLU': document.getElementById('ESLU').style.fill,
    'ESM': document.getElementById('ESM').style.fill,
    'ESMA': document.getElementById('ESMA').style.fill,
    'ESNA': document.getElementById('ESNA').style.fill,
    'ESO': document.getElementById('ESO').style.fill,
    'ESOR': document.getElementById('ESOR').style.fill,
    'ESP': document.getElementById('ESP').style.fill,
    'ESPM': document.getElementById('ESPM').style.fill,
    'ESPO': document.getElementById('ESPO').style.fill,
    'ESS': document.getElementById('ESS').style.fill,
    'ESSA': document.getElementById('ESSA').style.fill,
    'ESSE': document.getElementById('ESSE').style.fill,
    'ESSG': document.getElementById('ESSG').style.fill,
    'ESSO': document.getElementById('ESSO').style.fill,
    'ESSS': document.getElementById('ESSS').style.fill,
    'ESTE': document.getElementById('ESTE').style.fill,
    'ESTF': document.getElementById('ESTF').style.fill,
    'ESTO': document.getElementById('ESTO').style.fill,
    'EST': document.getElementById('EST').style.fill,
    'ESV': document.getElementById('ESV').style.fill,
    'ESVA': document.getElementById('ESVA').style.fill,
    'ESVI': document.getElementById('ESVI').style.fill,
    'ESZ': document.getElementById('ESZ').style.fill,
    'ESZA': document.getElementById('ESZA').style.fill,
    'ESDFG': document.getElementById('ESDFG').style.fill,
    'ESDFH': document.getElementById('ESDFH').style.fill,
  }
  var save = JSON.stringify(saveobj)
  setCookie("save" + num, save, 10);
}

function setCookie(c_name,value,expireyears)
{
   var exdate=new Date();
   exdate.setHours(exdate.getHours()+expireyears*365*24);
   document.cookie=c_name+ "=" +escape(value)+
   ((expireyears==null) ? "" : ";expires="+exdate.toUTCString());
}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    {
    c_start=c_start + c_name.length+1;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    }
  }
return "";
}

function load(num){
  var saveobj = JSON.parse(getCookie("save" + num));
  document.getElementById('ESA').style.fill = saveobj.ESA;
  document.getElementById('ESAB').style.fill = saveobj.ESAB;
  document.getElementById('ESAL').style.fill = saveobj.ESAL;
  document.getElementById('ESAV').style.fill = saveobj.ESAV;
  document.getElementById('ESB').style.fill = saveobj.ESB;
  document.getElementById('ESBA').style.fill = saveobj.ESBA;
  document.getElementById('ESBI').style.fill = saveobj.ESBI;
  document.getElementById('ESBU').style.fill = saveobj.ESBU;
  document.getElementById('ESC').style.fill = saveobj.ESC;
  document.getElementById('ESCA').style.fill = saveobj.ESCA;
  document.getElementById('ESCC').style.fill = saveobj.ESCC;
  document.getElementById('ESCO').style.fill = saveobj.ESCO;
  document.getElementById('ESCR').style.fill = saveobj.ESCR;
  document.getElementById('ESCS').style.fill = saveobj.ESCS;
  document.getElementById('ESCU').style.fill = saveobj.ESCU;
  document.getElementById('ESGC').style.fill = saveobj.ESGC;
  document.getElementById('ESGI').style.fill = saveobj.ESGI;
  document.getElementById('ESGR').style.fill = saveobj.ESGR;
  document.getElementById('ESGU').style.fill = saveobj.ESGU;
  document.getElementById('ESH').style.fill = saveobj.ESH;
  document.getElementById('ESHU').style.fill = saveobj.ESHU;
  document.getElementById('ESJ').style.fill = saveobj.ESJ;
  document.getElementById('ESL').style.fill = saveobj.ESL;
  document.getElementById('ESLE').style.fill = saveobj.ESLE;
  document.getElementById('ESLO').style.fill = saveobj.ESLO;
  document.getElementById('ESLU').style.fill = saveobj.ESLU;
  document.getElementById('ESM').style.fill = saveobj.ESM;
  document.getElementById('ESMA').style.fill = saveobj.ESMA;
  document.getElementById('ESNA').style.fill = saveobj.ESNA;
  document.getElementById('ESO').style.fill = saveobj.ESO;
  document.getElementById('ESOR').style.fill = saveobj.ESOR;
  document.getElementById('ESP').style.fill = saveobj.ESP;
  document.getElementById('ESPM').style.fill = saveobj.ESPM;
  document.getElementById('ESPO').style.fill = saveobj.ESPO;
  document.getElementById('ESS').style.fill = saveobj.ESS;
  document.getElementById('ESSA').style.fill = saveobj.ESSA;
  document.getElementById('ESSE').style.fill = saveobj.ESSE;
  document.getElementById('ESSG').style.fill = saveobj.ESSG;
  document.getElementById('ESSO').style.fill = saveobj.ESSO;
  document.getElementById('ESSS').style.fill = saveobj.ESSS;
  document.getElementById('ESTE').style.fill = saveobj.ESTE;
  document.getElementById('ESTF').style.fill = saveobj.ESTF;
  document.getElementById('ESTO').style.fill = saveobj.ESTO;
  document.getElementById('EST').style.fill = saveobj.EST;
  document.getElementById('ESV').style.fill = saveobj.ESV;
  document.getElementById('ESVA').style.fill = saveobj.ESVA;
  document.getElementById('ESVI').style.fill = saveobj.ESVI;
  document.getElementById('ESZ').style.fill = saveobj.ESZ;
  document.getElementById('ESZA').style.fill = saveobj.ESZA;
  document.getElementById('ESDFG').style.fill = saveobj.ESDFG;
  document.getElementById('ESDFH').style.fill = saveobj.ESDFH;
}