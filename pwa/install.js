if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwa/worker.js', { scope: '/' })
}

let installPrompt

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  installPrompt = e
})