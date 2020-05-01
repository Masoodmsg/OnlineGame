const staticCacheList = [];
const CACHE_VERSION = '1.52';

const CURRENT_CACHE = {
    static: 'static-cache-v' + CACHE_VERSION,
    dynamic: 'dynamic-cache-v' + CACHE_VERSION
};
/*  Service Worker Event Handlers */

self.addEventListener("install", function (event) {

    self.skipWaiting()
    //event.waitUntil(
    //    caches.open(CURRENT_CACHE['static'])
    //        .then((cache) => {
    //            cache.addAll(staticCacheList);
    //        })
    //)

});

self.addEventListener("activate", event => {

    let expectedCacheNames = Object.values(CURRENT_CACHE);

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return (
                cacheNames.forEach(cacheName => {
                    if (!expectedCacheNames.includes(cacheName)) {
                        console.log('Deleting out of date cache:', cacheName);

                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )

    event.waitUntil(

        caches.keys().then(cacheNames => {
            cacheNames.forEach(value => {

                if (value.indexOf(CACHE_VERSION) < 0) {
                    caches.delete(value);
                }

            });

            console.log("service worker activated");

            return;

        })

    );

});

self.addEventListener("fetch", function (event) {

    var url = event.request.url
    if (event.request.method === 'GET' && url.indexOf('http') > -1 && url.indexOf('ws.') === -1 ) // && (url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.css') || url.lastIndexOf('.woff') > -1 || url.endsWith('.js') || url.endsWith('.svg'))
    {

        return event.respondWith(
            caches.match(event.request).then(response => {
                if (response) return response;

                return fetch(event.request)
                    .then(networkResponse => {
                        return caches.open(CURRENT_CACHE['dynamic'])
                            .then(cache => {
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            })
                    })
                    .catch(err => {
                        return caches.open(CURRENT_CACHE['dynamic'])
                            .then(cache => {
                                return cache.match('/404.html');
                            })
                    })
            })
        )


    } else {
        // return fetch(event.request)
    }
    //event.respondWith(
    //    caches.match(event.request)
    //    .then(function (response) {

    //        if (response) {
    //            return response;
    //        }

    //        return fetch(event.request);
    //    })
    //);

});