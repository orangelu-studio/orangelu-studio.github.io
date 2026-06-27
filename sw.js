const CACHE = "jy-home-v16-relationship-modules";
const FILES = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.json", "./assets/images/rooms/living.webp", "./assets/images/rooms/kitchen.webp", "./assets/images/rooms/study.webp", "./assets/images/rooms/bedroom.webp", "./assets/images/rooms/balcony.webp", "./assets/images/rooms/camera.webp"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.url.includes("/api/")) return;

  // 对所有文件都用 network-first 策略，确保拿到最新版本
  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.open(CACHE).then((cache) => cache.match(event.request))
      )
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
  if (event.data === "CLEAR_ALL_CACHES") {
    event.waitUntil(
      caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
    );
  }
});
