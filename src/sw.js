// reference:
// https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('offline')
            .then(cache => cache.addAll([
                '/offline.html'
            ]))
            .then(self.skipWaiting())
    );
});

self.addEventListener('fetch', event => {
    // We only want to call event.respondWith() if this is a navigation request for an HTML page.
    if (event.request.mode === 'navigate' ||
        (event.request.method === 'GET' &&
        event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(event.request).catch(() => {
                // The catch is only triggered if fetch() throws an exception, which will most likely
                // happen due to the server being unreachable.
                return caches.match('/offline.html');
            })
        );
    }
});
