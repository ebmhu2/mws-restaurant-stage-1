/**
 * // Make sure service worker are supported in browser
 * register service worker
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('Service Worker: Registered (Pages)'))
    .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}