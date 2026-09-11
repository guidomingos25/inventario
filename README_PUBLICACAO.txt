INVENTÁRIO DV — PACOTE COMPLETO PARA CLOUDFLARE PAGES
=====================================================

Este pacote já contém:
- index.html atualizado
- app-config.js já configurado com o Supabase informado
- manifest.webmanifest
- service-worker.js
- _headers para Cloudflare Pages
- logo e ícones da PWA na pasta assets

ATUALIZAÇÕES DESTA VERSÃO
-------------------------
- Tema claro e escuro mantidos.
- Identidade visual Della Volpe mantida.
- GPS passa a ficar ativo enquanto o usuário estiver na tela Conferência,
  mesmo sem abrir a câmera.
- Ao sair da tela Conferência, o acompanhamento contínuo do GPS é encerrado.
- A tela Conferência mostra a precisão do GPS em tempo real, por exemplo:
  "GPS: 7 m".
- A leitura manual e a leitura pela câmera utilizam a localização disponível.
- Regras de inventário, QR Code, relatórios, filtros, usuários e demais
  funcionalidades permanecem inalteradas.

PUBLICAÇÃO NO CLOUDFLARE PAGES
-------------------------------
Publique o CONTEÚDO desta pasta na raiz do projeto, preservando esta estrutura:

index.html
app-config.js
manifest.webmanifest
service-worker.js
_headers
assets/
  logo-della-volpe.png
  icon-192.png
  icon-512.png
  maskable-512.png
  apple-touch-icon.png
  favicon-32.png

SUPABASE
--------
Não é necessário alterar tabelas, RLS, RPCs ou Authentication somente por
publicar esta versão no Cloudflare Pages. O app-config.js deste pacote já está
configurado com a URL e a publishable/anon key fornecidas.

IMPORTANTE
----------
Nunca coloque uma service_role key no frontend. A chave deste pacote é a
publishable/anon key fornecida para a aplicação web.

CACHE / ATUALIZAÇÃO DA PWA
--------------------------
O Service Worker usa a versão de cache inventario-dv-shell-v5 para facilitar a
atualização dos aparelhos que já possuem a PWA instalada.
