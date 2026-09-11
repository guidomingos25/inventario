INVENTÁRIO DV — PACOTE COMPLETO PARA GITHUB PAGES
==================================================

Esta versão inclui:
- identidade visual Della Volpe em laranja;
- tema claro e tema escuro selecionáveis pelo usuário;
- preferência do tema salva no próprio navegador/celular;
- PWA instalável no Android;
- app-config.js já configurado conforme o arquivo fornecido;
- mesmas regras e funcionalidades da aplicação de produção.

PUBLICAÇÃO
----------
Envie TODO o conteúdo desta pasta para a raiz do repositório GitHub Pages:

index.html
app-config.js
manifest.webmanifest
service-worker.js
assets/

Não é necessário alterar o Supabase para usar o tema escuro.

TEMA
----
O tema padrão permanece CLARO.
O usuário pode alternar Claro/Escuro:
- na tela de login;
- na seleção de filial;
- no cabeçalho da aplicação.

A escolha fica salva no navegador por localStorage e é reutilizada nos próximos acessos.

ATUALIZAÇÃO DA PWA
------------------
O cache do Service Worker desta versão é inventario-dv-shell-v4.
Após publicar no GitHub Pages, aguarde o deploy terminar e faça Ctrl+F5 no computador.
No aplicativo instalado no Android, feche e abra novamente para receber a nova versão.
