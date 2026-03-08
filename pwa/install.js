if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('worker.js')
}

let installPrompt

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  installPrompt = e
})