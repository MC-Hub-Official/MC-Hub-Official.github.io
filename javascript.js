// DO NOT EDIT THIS: VITAL FILE
var d = new Date();

if (d.getDay() == 0) {
    document.body.style.backgroundImage = "url('/images/backgrounds/0.png')";
}
if (d.getDay() == 1) {
    document.body.style.backgroundImage = "url('/images/backgrounds/1.png')";
}
if (d.getDay() == 2) {
    document.body.style.backgroundImage = "url('/images/backgrounds/2.png')";
}
if (d.getDay() == 3) {
    document.body.style.backgroundImage = "url('/images/backgrounds/3.png')";
}
if (d.getDay() == 4) {
    document.body.style.backgroundImage = "url('/images/backgrounds/4.png')";
}
if (d.getDay() == 5) {
    document.body.style.backgroundImage = "url('/images/backgrounds/5.png')";
}
if (d.getDay() == 6) {
    document.body.style.backgroundImage = "url('/images/backgrounds/6.png')";
}

function setup() {
    $("head").html('<meta name="viewport" content="width=device-width, initial-scale=1"><script src="https://www.googleoptimize.com/optimize.js?id=OPT-TNV37V3"></script><script async src="https://www.googletagmanager.com/gtag/js?id=UA-179487034-1"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-179487034-1");</script><script async src="https://cse.google.com/cse.js?cx=c9e60bf9b9fec089e"></script><link rel="stylesheet" href="/css/style.css"><link rel="stylesheet" href="/css/navbar.css"><link rel="stylesheet" href="/css/colours.css"><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet"><title> MC Hub </title>');
    $("#nav").html('<div class="logo"><img src="/images/MC-Hub.png" width="260" height="63"/><br></div><div class="navbar"><div class="dropdown"><button class="dropbtn">Menu</button><div class="dropdown-content"><a href="/index.html">Hub</a><a href="/tips.html">Tips</a><a href="/facts.html">Facts</a><a href="/seeds.html">Seeds</a><a href="/commands.html">Commands</a></div></div></div><br><br><br>');
    $("#foot").html('<a href="https://account.xbox.com/en-gb/profile?gamertag=MCHubSite" class="green" style="float:left; font-size: 28px;">Xbox</a><a href="https://www.youtube.com/channel/UCP2347E62P5fcoC2eK8QiPg" class="red" style="float:right; font-size: 28px;">YouTube</a><br><p style="color: white;">This website uses cookies from Google to enable marketing services such as Google Analytics. Your data is completely anonymous.');
}
