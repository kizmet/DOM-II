const crazyHeader = document.querySelector("body > header > div > h1");
crazyHeader.addEventListener('click', e => {
    console.log(`click event!`);
    e.stopPropagation();
    //     TweenMax.to(e.currentTarget, 1, {

    // });
});

crazyHeader.addEventListener('mouseover', e => {
    e.stopPropagation();
    console.log(`crazyHeader fired a mouseover event!`);
    TweenMax.to(e.currentTarget, 1, {
        // width:200,
        rotation: 360,
        ease: Bounce.easeOut
    });
});

crazyHeader.addEventListener('mouseout', e => {
    e.stopPropagation();
    console.log(`crazyHeader fired a mouseout event!`);

    TweenMax.to(e.currentTarget, 1, {
        // width:150,
        rotation: -360,
        ease: Bounce.easeOut
    });
});
/* 
to get the geolocation to work need to run a local https environment. 
here's what i did: 

1. navigate to project folder (DOM-II) and generate a root certificate: 
openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes

2. open interactive python3 session in terminal
python3

3. start server using recently created certificate

import http.server, ssl
server_address = ('localhost', 4443)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket,
                               server_side=True,
                               certfile='server.pem',
                               ssl_version=ssl.PROTOCOL_TLSv1)
httpd.serve_forever()

4. open secure port in browser
https://localhost:4443/

*/
const netInfo = document.querySelector("body > header > div > nav");
const newA = document.createElement("a");
newA.setAttribute('class', 'nav-link-local');
newA.setAttribute('href', '#0');
newA.textContent = "Local Trips";
netInfo.append(newA)

const options = {
    enableHighAccuracy: true,
    timeout: 100000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    alert(`Now showing trips in your location (Longitude: ${crd.longitude} Latitude : ${crd.latitude}`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function geo() {
    navigator.geolocation.getCurrentPosition(success, error, options);
}

const localA = document.querySelector("body > header > div > nav > a.nav-link-local");

localA.addEventListener('click', e => {
    e.stopPropagation;
    geo();
});

const contPck = document.querySelector("body > div > section.content-pick");
const choose = document.createElement("div");
choose.setAttribute('style', "font-size:2.5rem; font-family:'Indie Flower', cursive; color:green;");
choose.id = "choose"
contPck.append(choose);

function choice() {
    var choose = document.createElement("div");
    choose.setAttribute('style', "font-size:2.5rem; font-family:'Indie Flower', cursive; color:green;");
    choose.id = "choose";
    contPck.append(choose);
}


const buttons = document.querySelectorAll("section.content-pick div.btn");
buttons.forEach(button => {
    button.addEventListener('click', e => {
        // choice()
        e.preventDefault();
        // var title = "Trip added!";
        var title = e.target.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
        
        var trip = document.querySelector("#choose");
        trip.textContent = title;
    })
});

document.querySelector("#choose").addEventListener('click', e => {
    e.preventDefault();
    document.getElementById("choose").remove();
    // choice ()
    const choose = document.createElement("div");
    choose.setAttribute('class', 'home');
    choose.setAttribute('style', "font-size:2.5rem; font-family:'Indie Flower', cursive; color:green;");
    choose.id = "choose"
    contPck.append(choose);
});

document.addEventListener('load', e => {

})