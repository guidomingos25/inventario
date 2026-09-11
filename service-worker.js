/* Inventário DV — Service Worker
   Estratégia conservadora para não interferir no Supabase nem nas regras da aplicação.
*/
const CACHE_NAME='inventario-dv-shell-v3';
const APP_SHELL=[
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/logo-della-volpe.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/maskable-512.png',
  './assets/apple-touch-icon.png',
  './assets/favicon-32.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;

  const url=new URL(request.url);

  // Nunca intercepta serviços externos, Supabase ou o arquivo de configuração.
  if(url.origin!==self.location.origin || url.pathname.endsWith('/app-config.js'))return;

  // Navegação: rede primeiro, cache apenas como fallback.
  if(request.mode==='navigate'){
    event.respondWith(
      fetch(request).then(response=>{
        if(response && response.ok){
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy));
        }
        return response;
      }).catch(()=>caches.match('./index.html'))
    );
    return;
  }

  // Arquivos locais estáticos: cache primeiro, atualização em segundo plano.
  event.respondWith(
    caches.match(request).then(cached=>{
      const network=fetch(request).then(response=>{
        if(response && response.ok){
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(request,copy));
        }
        return response;
      }).catch(()=>cached);
      return cached || network;
    })
  );
});
