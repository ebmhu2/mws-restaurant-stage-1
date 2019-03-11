// Declare and initialize staticCacheName
let staticCacheName = 'cache-v1';
// Files to be loaded to cache
const cacheFiles = [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/swRegister.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './img/large1.jpg',
  './img/large2.jpg',
  './img/large3.jpg',
  './img/large4.jpg',
  './img/large5.jpg',
  './img/large6.jpg',
  './img/large7.jpg',
  './img/large8.jpg',
  './img/large9.jpg',
  './img/large10.jpg'
];

// add event listener for SW install event
self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open(staticCacheName).then(function(cache){
        return cache.addAll(cacheFiles)
      })
  );
});


// Call Fetch Event
self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log(event.request);
          return response;
        }
        const fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              const responseToCache = response.clone();
              caches.open(staticCacheName)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
              return response;
            }
        );
      })
      .catch(function(error) {
        console.log('error cannot fetch');
      })
  );
});


// add event listener for activate event
// delete the old one
self.addEventListener('activate', function(event) {
  event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.filter(function(cacheName) {
              return cacheName.startsWith('restaurant-static') && cacheName !== staticCacheName;
            }).map(function(cacheName) {
              return caches.delete(cacheName);
            })
        )
      })
  );
});