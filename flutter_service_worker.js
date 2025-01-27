'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ce3822046b713b5925371ce9d209c547",
"assets/AssetManifest.bin.json": "c6dc79509a4b0d1613f1713193ac3fbd",
"assets/AssetManifest.json": "a62c7c95923833207d64a39390cc6159",
"assets/assets/modeles/buste.jpg": "b359dbf3e8b76b1e997c21f1279dd6de",
"assets/assets/modeles/face.jpg": "727ec30f88d471d732dd4879268e4e19",
"assets/assets/modeles/jambes.jpg": "95109a41079e963f9b44724d499a4c95",
"assets/assets/modeles/profil.jpg": "dc2fe6640fbf4487179d46fe13e70f82",
"assets/assets/modeles/tete.jpg": "42f340ae538aea59d1624e6c689e4ba5",
"assets/assets/neutres/bobine.jpg": "5ea93dd69445909abb556b3c2a33b31f",
"assets/assets/neutres/cotontiges.jpg": "069bc7e429ebf26d70bef41156e70568",
"assets/assets/neutres/paperclip.jpg": "0f5a761baf660dee75c3c45546ec8a17",
"assets/assets/neutres/papier.jpg": "dd3972458146f4608ffa56db9829aab0",
"assets/assets/neutres/stylos.jpg": "2f303246d2dd610f757c431dcb108325",
"assets/assets/nonmots/Botu.jpg": "0fc623dc4a66afb7f9398847eea66728",
"assets/assets/nonmots/Bymo.jpg": "f3cca4a1ef4095a79a9e4a56a73cf200",
"assets/assets/nonmots/Cipo.jpg": "407a0ecac36a3e6149e7309829d4f212",
"assets/assets/nonmots/Dasi.jpg": "c2fc951318722b1c085bd52a21014379",
"assets/assets/nonmots/Dele.jpg": "58a02db5d332ade7528f1ed8675c0bf9",
"assets/assets/nonmots/Dema.jpg": "43914ccfa85036f96b4e4ad7804cfaa2",
"assets/assets/nonmots/Deta.jpg": "b3e89124338ac98fbcb9c90c5bbe510a",
"assets/assets/nonmots/Hese.jpg": "03ad6441a73d30bacd1c210430c7174a",
"assets/assets/nonmots/Kivo.jpg": "7bb8199cabd76bf15f3ed587dd93e9bf",
"assets/assets/nonmots/Luso.jpg": "dbd0e57cbcc004afd028562c8528f99c",
"assets/assets/nonmots/Moli.jpg": "88764b9cefc103eac8a43670a9715e1e",
"assets/assets/nonmots/Nofi.jpg": "bc8867385791346381c77403e9f51bd2",
"assets/assets/nonmots/Pelu.jpg": "92303845daebc247b76cf1e5231fbf2b",
"assets/assets/nonmots/Poso.jpg": "dd3c7d78651c3ce3e933d6dd40f5ba02",
"assets/assets/nonmots/Rera.jpg": "5ca4c8a6822cf94c3469853e46387ad2",
"assets/assets/nonmots/Royu.jpg": "6189c0b7e0d038e06d040d567663b815",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "816edd59cb8e5b56561411173cf5a859",
"assets/NOTICES": "40ad219ccf020ac9f73a3fa4bc427f34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "6e5f901a91afad3634086a921fc3b0dd",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e5c04d38b961d8b8d7547c2db8aa97fc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a8ccb1e6969fabc37fe02f12a6c5c48e",
"/": "a8ccb1e6969fabc37fe02f12a6c5c48e",
"main.dart.js": "f5f83c99520f54806c4152573c16f143",
"manifest.json": "7b064eb1acba32f233fc3d9efc4e9ce4",
"version.json": "bbb36bd0fc9552602e2e10d7c27c4c31"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
