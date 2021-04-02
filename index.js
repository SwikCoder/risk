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
    'Norway': document.getElementById('Afghanistan').style.fill,
    'Norway': document.getElementById('Norway').style.fill,
    'Sweeden': document.getElementById('Sweeden').style.fill,
    'Italy': document.getElementById('Italy').style.fill,
    'US': document.getElementById('US').style.fill,
    'Canada': document.getElementById('Canada').style.fill,
    'Greenland': document.getElementById('Greenland').style.fill,
    'Mexico': document.getElementById('Mexico').style.fill,
    'Brazil': document.getElementById('Brazil').style.fill,
    'Argentina': document.getElementById('Argentina').style.fill,
    'Bolivia': document.getElementById('Bolivia').style.fill,
    'Peru': document.getElementById('Peru').style.fill,
    'Colombia': document.getElementById('Colombia').style.fill,
    'Venezuela': document.getElementById('Venezuela').style.fill,
    'Algeria': document.getElementById('Algeria').style.fill,
    'Mali': document.getElementById('Mali').style.fill,
    'Nigeria': document.getElementById('Nigeria').style.fill,
    'Egypt': document.getElementById('Egypt').style.fill,
    'Sudan': document.getElementById('Sudan').style.fill,
    'Niger': document.getElementById('Niger').style.fill,
    'Congo': document.getElementById('Congo').style.fill,
    'UK': document.getElementById('UK').style.fill,
    'Island': document.getElementById('Island').style.fill,
    'Tanzania': document.getElementById('Tanzania').style.fill,
    'Madagascar': document.getElementById('Madagascar').style.fill,
    'Africa': document.getElementById('Africa').style.fill,
    'UAE': document.getElementById('UAE').style.fill,
    'Iraq': document.getElementById('Iraq').style.fill,
    'Turkey': document.getElementById('Turkey').style.fill,
    'Iran': document.getElementById('Iran').style.fill,
    'Greece': document.getElementById('Greece').style.fill,
    'Germany': document.getElementById('Germany').style.fill,
    'France': document.getElementById('France').style.fill,
    'Spain': document.getElementById('Spain').style.fill,
    'Russia': document.getElementById('Russia').style.fill,
    'India': document.getElementById('India').style.fill,
    'Poland': document.getElementById('Poland').style.fill,
    'Kazakhstan': document.getElementById('Kazakhstan').style.fill,
    'China': document.getElementById('China').style.fill,
    'Mongolia': document.getElementById('Mongolia').style.fill,
    'Indonesia': document.getElementById('Indonesia').style.fill,
    'Australia': document.getElementById('Australia').style.fill,
    'Finland': document.getElementById('Finland').style.fill,
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
  document.getElementById('Afghanistan').style.fill = saveobj.Afghanistan;
  document.getElementById('Italy').style.fill = saveobj.Italy;
  document.getElementById('Norway').style.fill = saveobj.Norway;
  document.getElementById('Sweeden').style.fill = saveobj.Sweeden;
  document.getElementById('US').style.fill = saveobj.US;
  document.getElementById('Canada').style.fill = saveobj.Canada;
  document.getElementById('Greenland').style.fill = saveobj.Greenland;
  document.getElementById('Mexico').style.fill = saveobj.Mexico;
  document.getElementById('Brazil').style.fill = saveobj.Brazil;
  document.getElementById('Argentina').style.fill = saveobj.Argentina;
  document.getElementById('Bolivia').style.fill = saveobj.Bolivia;
  document.getElementById('Peru').style.fill = saveobj.Peru;
  document.getElementById('Colombia').style.fill = saveobj.Colombia;
  document.getElementById('Venezuela').style.fill = saveobj.Venezuela;
  document.getElementById('Algeria').style.fill = saveobj.Algeria;
  document.getElementById('Mali').style.fill = saveobj.Mali;
  document.getElementById('Nigeria').style.fill = saveobj.Nigeria;
  document.getElementById('Egypt').style.fill = saveobj.Egypt;
  document.getElementById('Sudan').style.fill = saveobj.Sudan;
  document.getElementById('Niger').style.fill = saveobj.Niger;
  document.getElementById('Congo').style.fill = saveobj.Congo;
  document.getElementById('UK').style.fill = saveobj.UK;
  document.getElementById('Island').style.fill = saveobj.Island;
  document.getElementById('Tanzania').style.fill = saveobj.Tanzania;
  document.getElementById('Madagascar').style.fill = saveobj.Madagascar;
  document.getElementById('Africa').style.fill = saveobj.Africa;
  document.getElementById('UAE').style.fill = saveobj.UAE;
  document.getElementById('Iraq').style.fill = saveobj.Iraq;
  document.getElementById('Turkey').style.fill = saveobj.Turkey;
  document.getElementById('Iran').style.fill = saveobj.Iran;
  document.getElementById('Greece').style.fill = saveobj.Greece;
  document.getElementById('Germany').style.fill = saveobj.Germany;
  document.getElementById('France').style.fill = saveobj.France;
  document.getElementById('Spain').style.fill = saveobj.Spain;
  document.getElementById('Russia').style.fill = saveobj.Russia;
  document.getElementById('India').style.fill = saveobj.India;
  document.getElementById('Poland').style.fill = saveobj.Poland;
  document.getElementById('Kazakhstan').style.fill = saveobj.Kazakhstan;
  document.getElementById('China').style.fill = saveobj.China;
  document.getElementById('Mongolia').style.fill = saveobj.Mongolia;
  document.getElementById('Indonesia').style.fill = saveobj.Indonesia;
  document.getElementById('Australia').style.fill = saveobj.Australia;
  document.getElementById('Finland').style.fill = saveobj.Finland;
}