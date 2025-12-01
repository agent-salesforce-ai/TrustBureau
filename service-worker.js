const CACHE_NAME = 'trustbureau-v1';
const ASSETS = [
  './',
  './calculator.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://rsms.me/inter/inter.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
