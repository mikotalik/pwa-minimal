self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone()
      caches.open('app').then(cache => cache.put(e.request, copy))
      return res
    }).catch(() => caches.match(e.request))
  )
})

self.addEventListener('install', e => self.skipWaiting())