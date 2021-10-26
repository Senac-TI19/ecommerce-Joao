const cacheName= "ecommerce-joao-v1";

const recursosCacheados = [
    "./index.html",
    "./clubes.html",
    "./selecoes.html",
    "./index.js",
    "./style.css",
    "./favicon.icon",
    "./dropdown-menu.css",
    "./icons/apple-icon-57x57.png",
    "./icons/apple-icon-60x60.png",
    "./icons/apple-icon-72x72.png",
    "./icons/apple-icon-76x76.png",
    "./icons/apple-icon-114x114.png",
    "./icons/apple-icon-120x120.png",
    "./icons/apple-icon-144x144.png",
    "./icons/apple-icon-152x152.png",
    "./icons/apple-icon-180x180.png",
    "./icons/favicon-512x512.png",
    "./icons/android-icon-192x192.png",
    "./icons/favicon-32x32.png",
    "./icons/favicon-96x96.png",
    "./icons/favicon-16x16.png",
    "./icons/ms-icon-144x144.png",
]

self.addEventListener ("install", function (event) {
    console.log("Service Worker instalado");
    event.waitUnitl(
        caches.open(cacheName).then(function (cahe){
            return cache.addAll(recursosCacheados);
        })
    );
});