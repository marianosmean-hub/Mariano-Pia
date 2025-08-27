self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('mariano-cache-v4').then(cache => cache.addAll([
    './index.html','./app.webmanifest','./icon-192.png','./icon-512.png'
  ])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});