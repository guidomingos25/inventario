INVENTÁRIO DV — PACOTE COMPLETO PARA CLOUDFLARE PAGES
========================================================

Este pacote já contém o app-config.js configurado com o Supabase informado por você.
O nome visual foi alterado para “Inventário DV” e a aplicação foi preparada como PWA instalável.

ARQUIVOS PARA PUBLICAR NA RAIZ DO CLOUDFLARE PAGES
---------------------------------------------------
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

O QUE FOI ALTERADO
------------------
1. Nome da aplicação: Inventário QR -> Inventário DV.
2. Logo Della Volpe incluído na tela de login e cabeçalho.
3. Tema visual azul substituído por laranja/cinza/amarelo do logo, mantendo páginas claras/brancas.
4. Manifesto PWA e ícones adicionados.
5. Service Worker adicionado com estratégia conservadora.
6. Botão de instalação aparece quando o navegador Android disponibiliza a instalação.
7. app-config.js já incluído e configurado.

O QUE NÃO FOI ALTERADO
----------------------
- Regras de conferência.
- Regras de inventário.
- Cálculos e filtros.
- Login/autenticação.
- Tabelas/RLS/RPCs do Supabase.
- Leitura de QR e câmera.
- Exportações Excel/PDF.
- Administração de usuários/inventários.

SUPABASE / BACKEND
------------------
Não é necessário alterar seu banco ou suas configurações do Supabase somente por transformar o frontend em PWA.
Mantenha tabelas, RLS, RPCs, usuários e autenticação como estão.

A única verificação opcional é em Edge Functions próprias: se alguma delas restringir CORS a um domínio antigo de forma explícita, inclua também o novo domínio do Cloudflare Pages. Se não houver restrição explícita por domínio, não há alteração necessária.

PUBLICAÇÃO
----------
Publique TODO o conteúdo deste pacote na raiz do projeto do Cloudflare Pages.
O site precisa ser servido por HTTPS (Cloudflare Pages já fornece HTTPS).

INSTALAÇÃO NO ANDROID
---------------------
1. Abra o endereço publicado no Google Chrome.
2. Quando disponível, toque em “Instalar aplicativo” / botão de instalação.
3. Confirme a instalação.
4. O Inventário DV ficará disponível na tela inicial/lista de aplicativos.

ATUALIZAÇÕES FUTURAS
--------------------
Ao publicar uma nova versão do index.html no Cloudflare Pages, o aplicativo instalado continuará apontando para o mesmo site e receberá as atualizações. O Service Worker foi configurado para priorizar a rede na navegação, reduzindo o risco de ficar preso em uma versão antiga.
