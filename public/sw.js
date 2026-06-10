const CACHE_NAME = 'honviet-v1';
const CONTENT_CACHE = 'honviet-content-v1';
const STATIC_ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME && k !== CONTENT_CACHE).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;

  if (url.hostname.includes('supabase')) {
    event.respondWith(
      Promise.race([
        fetch(event.request).then((res) => {
          const clone = res.clone();
          caches.open(CONTENT_CACHE).then((cache) => cache.put(event.request, clone));
          return res;
        }),
        new Promise((_, reject) => setTimeout(() => reject('timeout'), 3000)),
      ]).catch(() =>
        caches.match(event.request).then((cached) => cached || new Response('{}', {
          headers: { 'Content-Type': 'application/json' }
        }))
      )
    );
    return;
  }

  if (url.hostname.includes('r2.dev') || url.pathname.match(/\.(jpg|jpeg|png|webp|avif|svg)$/)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((res) => {
          const clone = res.clone();
          caches.open(CONTENT_CACHE).then((cache) => cache.put(event.request, clone));
          return res;
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).catch(() => caches.match('/'))
    )
  );
});