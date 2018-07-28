// function Loadjson(file,callback) {
//   var hr = new XMLHttpRequest();
//   hr.overrideMimeType("application/json");
//   hr.open("GET",file,true);
//   hr.onreadystatechange = function() {
//     if (hr.readyState === 4 && hr.status == "200") {
//       callback(hr.responseText);
//     }
//   };
//   hr.send("null");
// }
//
// Loadjson("ipl.json",function(text)
// {
//   var data = JSON.parse(text);
//   console.log(data);
//   basic(data.dets);
//   rig(data.Career);
//   edu(data.Education);
//   ski(data.skills);
//   ach(data.aci);
// })
function Loadjson(file) {
  return new Promise((resolve,reject) =>{
    return fetch(file).then(response =>{
      if (response.ok){
        resolve(response.json());
      }
      else {
        reject(new Error('error'));
      }
    })
  })
}

var nufi = Loadjson("ipl.json");
nufi.then(data =>{
    console.log(data);
    basic(data.dets);
    rig(data.Career);
    edu(data.Education);
    ski(data.skills);
    ach(data.aci);

})

var Nam1 = document.querySelector(".Namde1");
function basic(de) {
  var im = document.createElement("img");
  im.src = de.image;
  Nam1.appendChild(im);
  var nam = document.createElement("h1");
  nam.textContent = de.name;
  Nam1.appendChild(nam);

  var ph = document.createElement("h3");
  ph.textContent = de.phno;
  Nam1.appendChild(ph);

  var Mail = document.createElement("a");
  Mail.href = "mailto:sasikiran276@gmail.com"
  Mail.textContent = de.mail;
  Nam1.appendChild(Mail);

  var Adds = document.createElement("h4");
  Adds.textContent = "Address:";
  Nam1.appendChild(Adds);

  var hor = document.createElement("hr");
  Nam1.appendChild(hor);

  var p = document.createElement("p");
  p.textContent = de.Address;
  Nam1.appendChild(p);
}

var Nam2 = document.querySelector(".Namde2");
function rig(car) {
  var care = document.createElement("h2");
  care.textContent = "Career Objective";
  Nam2.appendChild(care);

  var hor = document.createElement("hr");
  Nam2.appendChild(hor);

  var tex = document.createElement("p");
  tex.textContent = car.text;
  Nam2.appendChild(tex);
}

function edu(e) {
  var cars = document.createElement("h2");
  cars.textContent = "Eductional Qualification";
  Nam2.appendChild(cars);

  var hor = document.createElement("hr");
  Nam2.appendChild(hor);

  var tab = document.createElement("table");
  tab.border = "5";
  Nam2.appendChild(tab);

  tabdat="<tr><td>"+"Qualification"+"</td><td>"+"Institute"+"</td><td>"+"Year"+"</td><td>"+"percentage"+"</td></tr>";

  for(i=0;i<e.length;i++){
    tabdat+="<tr><td>"+e[i].qualification+"</td><td>"+e[i].institute+"</td><td>"+e[i].year+"</td><td>"+e[i].percentage+"</td></tr>";
  }
    tab.innerHTML = tabdat;
}

function ski(s) {
  var tec = document.createElement("h2");
  tec.textContent = "Technical Skills";
  Nam2.appendChild(tec);

  var hor = document.createElement("hr");
  Nam2.appendChild(hor);

  for(i=0;i<s.length;i++){
    var til = document.createElement("h4");
    til.textContent = s[i].title;
    Nam2.appendChild(til);

    var inful = document.createElement("ul");
    var infli = document.createElement("li");
    infli.textContent = s[i].info;
    inful.appendChild(infli);
    Nam2.appendChild(inful);
  }
}
function ach(a) {

  var aec = document.createElement("h2");
  aec.textContent = "Achievments";
  Nam2.appendChild(aec);

  var hor = document.createElement("hr");
  Nam2.appendChild(hor);

  for(i=0;i<a.length;i++){
  var aul = document.createElement("ul");
  var ali = document.createElement("li");

  ali.textContent = a[i].in;
  aul.appendChild(ali);
  Nam2.appendChild(aul);
  }
}
  function openpage() {
    window.open("Sample.html","_self",true)
  }
