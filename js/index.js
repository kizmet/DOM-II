const crazyHeader = document.querySelector("body > header > div > h1");
crazyHeader.addEventListener('click', e => {
  console.log(`Work button fired a click event!`);
  // ALL about stopping events from bubbling
  e.stopPropagation();
 
});

crazyHeader.addEventListener('mouseover', e => {
  e.stopPropagation();
  console.log(`crazyHeader fired a mouseover event!`);
  
  TweenMax.to(e.currentTarget, 1, {
    // width:200,
    rotation:360,
    ease:Bounce.easeOut
  });
});

crazyHeader.addEventListener('mouseout', e => {
  e.stopPropagation();
  console.log(`crazyHeader fired a mouseout event!`);
  
  TweenMax.to(e.currentTarget, 1, {
    // width:150,
    rotation:-360,
    ease:Bounce.easeOut
  });
});

document.querySelector("body > header > div > h1")

const netInfo = document.querySelector("body > header > div > nav");
const newA = document.createElement("a");
newA.setAttribute('class', 'nav-link-local');
newA.setAttribute('href', '#0');
newA.textContent = "Local-Trips";
netInfo.append(newA)

const localA = document.querySelector("body > header > div > nav > a.nav-link-local");

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  alert(`Now showing trips in your location (Longitude: ${crd.longitude} Latitude : ${crd.latitude}`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function geo () {
	navigator.geolocation.getCurrentPosition(success, error, options);
}

function localHover () {
	newA.innerHTML = "See trips in your area"
}

// newA.addEventListener('mouseover',localHover());

localA.addEventListener('click', e=> {
	e.stopPropagation;
	geo();
	}
);




const contPck = document.querySelector("body > div > section.content-pick");

let chooseH4 = document.createElement("h4");
// chooseH4.textContent = "hi";

let choose = document.createElement("div");
choose.setAttribute('class', 'home');
choose.setAttribute('style',"font-size:2.5rem; font-family:'Indie Flower', cursive; color:green;");
choose.id="choose"
contPck.append(choose);
choose.appendChild(chooseH4)

let buttons = document.querySelectorAll("section.content-pick div.btn");
buttons.forEach(button => {
button.addEventListener('click', e => {
	var title = "Trip added!";
	var trip = document.querySelector("#choose");
	trip.textContent = title;
})
});

document.querySelector("#choose").addEventListener('click', e =>{
	e.preventDefault();
	document.getElementById("choose").remove();
})
