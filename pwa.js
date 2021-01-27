let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.prompt();
}

head.insertAdjacentHTML("beforeend", '<meta name="theme-color" content="#0174DF"/><link rel="apple-touch-icon" href="https://exf.minecraft-hub.com/logos/icon-192.png"><link rel="manifest" href="/manifest.webmanifest">');
