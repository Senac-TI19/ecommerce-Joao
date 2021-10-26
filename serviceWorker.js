const cacheName= "cache-app-v1";

const recursosCacheados = [
    "index.html",
    "clubes.html",
    "selecoes.html",
    "index.js",
    "style.css",
    "favicon.icon",
    "dropdown-menu.css"
]

self.addEventListener ("install", function (event) {
    console.log("Service Worker instalado");
    event.waitUnitl(
        caches.open(cacheName).then(function (cahe){
            return cache.addAll(recursosCacheados);
        })
    );
});