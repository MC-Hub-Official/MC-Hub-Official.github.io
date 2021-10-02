var d = new Date();
var bgImages = ["url(https://exf.minecraft-hub.com/backgrounds/0.webp)", "url(https://exf.minecraft-hub.com/backgrounds/1.webp)", "url(https://exf.minecraft-hub.com/backgrounds/2.webp)", "url(https://exf.minecraft-hub.com/backgrounds/3.webp)", "url(https://exf.minecraft-hub.com/backgrounds/4.webp)", "url(https://exf.minecraft-hub.com/backgrounds/5.webp)", "url(https://exf.minecraft-hub.com/backgrounds/6.webp)"];

class MCHubHeader extends HTMLElement {
  connectedCallback() {
    // Insert logo
    this.insertAdjacentHTML("beforeend", '<div class="logo"><a href="/"><img src="https://exf.minecraft-hub.com/logos/logo.webp" alt="MC Hub Logo" onerror="this.src = \'https://exf.minecraft-hub.com/logos/logo.png\'"/></a><br /></div>');
    
    // Insert menubar
    this.insertAdjacentHTML("beforeend", '<div class="navbar"><div class="dropdown"><button class="dropbtn">Menu</button><div class="dropdown-content"><a href="/">Hub</a><a href="/tips">Tips</a><a href="/seeds">Seeds</a><a href="/facts">Facts</a><a href="/commands">Commands</a><a href="/search"> Search </a></div></div></div><br /><br /><br />');
  }
}

class MCHubFooter extends HTMLElement {
  connectedCallback() {
    // Insert cookie message
    this.insertAdjacentHTML("beforeend", '<p class="white"> This website uses cookies from Google to enable marketing services such as Google Analytics. Your data is completely anonymous. </p>');
    
    // Insert copyright message and credits link
    this.insertAdjacentHTML("beforeend", '<p class="white"> © 2020-2021<a class="orange" href="https://github.com/MC-Hub-Official"> MC Hub Official </a>- unless specified on our <a class="orange" href="/credits">Credits page</a>.</p>');
  }
}

customElements.define('mchub-footer', MCHubFooter);
customElements.define('mchub-header', MCHubHeader);

function setup() {
  var head = document.head;
  var body = document.body;
  body.style.backgroundImage = bgImages[d.getDay()];
  
  // Insert site metadata
  head.insertAdjacentHTML("beforeend", '<meta charset="UTF-8"><meta name="description" content="MC Hub is a free website with amazing tips, seeds, facts and command guides to help you become a Minecraft PRO in no time!"><link rel="icon" href="https://exf.minecraft-hub.com/logos/favicon.ico" type="image/x-icon"></script><meta name="viewport" content="width=device-width, initial-scale=1">');
  
  // Load (and run) external scripts
  head.insertAdjacentHTML("beforeend", '<script src="https://kit.fontawesome.com/1e53eeabd1.js" crossorigin="anonymous"></script><script src="https://www.googleoptimize.com/optimize.js?id=OPT-TNV37V3"></script><script async defer src="https://buttons.github.io/buttons.js"></script>');
  
  // Import CSS and other style files
  head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="/css/style.css"><link rel="stylesheet" href="/css/navbar.css"><link rel="stylesheet" href="/css/colours.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap">');
  
  // Insert Firebase scripts
  body.insertAdjacentHTML("beforeend", '<script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"></script><script> var firebaseConfig = { apiKey: "AIzaSyCJrzuFHQTTjQqs1nYqvSvT9pRWYkl3BKc", authDomain: "mc-hub-gc.firebaseapp.com", projectId: "mc-hub-gc", storageBucket: "mc-hub-gc.appspot.com", messagingSenderId: "511189266377", appId: "1:511189266377:web:1bf960a1eb8e98aceb8218", measurementId: "G-4VSVC65DWD" }; firebase.initializeApp(firebaseConfig); firebase.analytics(); </script>');
}