# diego-campanha
Site da campanha de Diego Serafim para Deputado Estadual pelo PDT/PA. Propostas, transparência e engajamento com o eleitor. Desenvolvido em MERN (MongoDB, Express, React, Node.js).

# 🗳️ Diego Serafim - Site de Campanha (Deputado Estadual)

**Status:** 🚧 Em Desenvolvimento  
**Stack:** MERN (MongoDB, Express, React, Node.js) + ES6  
**Meta de Carregamento:** < 2 segundos  
**Candidato:** Diego Serafim | PDT/PA | Nº 12.223  

---

## 📋 CHECKLIST COMPLETO DO PROJETO

### 📁 1. ESTRUTURA E CONFIGURAÇÃO INICIAL
- [X] Criar repositório no GitHub (`diego-campanha`)
- [X] Configurar branches (`main`, `develop`, `feature/*`, `bugfix/*`, `hotfix/*`)
- [X] Definir branch padrão como `develop` no GitHub
- [X] Criar `.gitignore` (template Node)
- [X] Criar `README.md` (este arquivo)
- [X] Estruturar pastas: `frontend/` e `backend/`
- [ ] Configurar variáveis de ambiente (`.env`) no backend
- [ ] Configurar variáveis de ambiente (`.env`) no frontend (se necessário)

---

### ⚙️ 2. BACKEND (Node.js + Express + MongoDB)
- [ ] Inicializar projeto Node.js (`npm init -y`)
- [ ] Instalar dependências: `express`, `mongoose`, `cors`, `dotenv`, `bcryptjs`, `jsonwebtoken`
- [ ] Instalar dependências de dev: `nodemon`, `eslint`
- [ ] Configurar conexão com MongoDB (Atlas ou local)
- [ ] Criar modelo `ProjetoLei` (título, descrição, status, data, link)
- [ ] Criar modelo `Noticia` (título, conteúdo, imagem, data)
- [ ] Criar modelo `MensagemContato` (nome, email, whatsapp, cidade, mensagem)
- [ ] Criar modelo `Voluntario` (nome, email, whatsapp, cidade, area_interesse)
- [ ] Criar modelo `Usuario` (admin - para o painel)
- [ ] Criar rotas CRUD para Projetos de Lei
- [ ] Criar rotas CRUD para Notícias
- [ ] Criar rotas para envio de formulário de contato (salvar no banco)
- [ ] Criar rotas para inscrição de voluntários (salvar no banco)
- [ ] Criar autenticação JWT para o painel admin (`/admin`)
- [ ] Criar middleware de autenticação
- [ ] Criar rota para envio de e-mail (Nodemailer) ao receber contato
- [ ] Criar rota para envio de notificação no WhatsApp (via API)
- [ ] Testar todas as rotas com Insomnia/Postman
- [ ] Configurar PM2 para manter o servidor rodando

---

### 🎨 3. FRONTEND (React + Vite + ES6)
- [ ] Inicializar projeto React com Vite (`npm create vite@latest . -- --template react`)
- [ ] Instalar dependências: `react-router-dom`, `axios`, `framer-motion`
- [ ] Instalar `react-intersection-observer` (para animações no scroll)
- [ ] Instalar `react-helmet-async` (para SEO dinâmico)
- [ ] Configurar rotas (React Router):
  - [ ] `/` → Home
  - [ ] `/sobre` → Sobre
  - [ ] `/propostas` → Propostas (4 eixos)
  - [ ] `/propostas/saude` → Detalhe Eixo 1
  - [ ] `/propostas/obras` → Detalhe Eixo 2
  - [ ] `/propostas/trabalho` → Detalhe Eixo 3
  - [ ] `/propostas/seguranca` → Detalhe Eixo 4
  - [ ] `/transparencia` → Transparência (projetos de lei)
  - [ ] `/noticias` → Notícias e Agenda
  - [ ] `/contato` → Contato (formulário + WhatsApp)
  - [ ] `/participe` → Voluntários
  - [ ] `/admin` → Painel Administrativo (protegido)
- [ ] Criar componentes base:
  - [ ] `Header` (com menu responsivo)
  - [ ] `Footer`
  - [ ] `WhatsAppFloat` (botão flutuante)
  - [ ] `CardEixo` (para os 4 eixos)
  - [ ] `CardNoticia`
  - [ ] `Button` (primário, secundário)
  - [ ] `Input` / `Textarea` (estilizados)
- [ ] Criar página **Home**:
  - [ ] Hero com vídeo institucional (loop mudo)
  - [ ] Frase de impacto: "O Pará pode mais. E vai."
  - [ ] Botões: "Conheça as propostas" / "Fale comigo"
  - [ ] Seção dos 4 eixos (cards)
- [ ] Criar página **Sobre**:
  - [ ] Foto profissional do candidato
  - [ ] Biografia (história, valores, família)
  - [ ] Trajetória política
  - [ ] Compromissos
- [ ] Criar página **Propostas**:
  - [ ] Lista dos 4 eixos com ícones e descrições
  - [ ] Páginas detalhadas para cada eixo (com textos e cards das artes)
- [ ] Criar página **Transparência**:
  - [ ] Lista de Projetos de Lei (buscando do backend)
  - [ ] Lista de Emendas e Requerimentos
  - [ ] Link para o Portal da Transparência da ALEPA
- [ ] Criar página **Notícias**:
  - [ ] Lista de notícias (buscando do backend)
  - [ ] Agenda do deputado (próximos compromissos)
- [ ] Criar página **Contato**:
  - [ ] Formulário (nome, email, whatsapp, cidade, mensagem)
  - [ ] Informações de contato (e-mail, WhatsApp, redes sociais)
- [ ] Criar página **Participe**:
  - [ ] Formulário para voluntários
  - [ ] Campo para newsletter
  - [ ] Canal de denúncias/sugestões
- [ ] Criar **Painel Admin**:
  - [ ] Login (JWT)
  - [ ] Dashboard com resumo
  - [ ] CRUD de Projetos de Lei
  - [ ] CRUD de Notícias
  - [ ] Visualização de mensagens do formulário
  - [ ] Visualização de voluntários inscritos

---

### 🎯 4. FUNCIONALIDADES ESPECÍFICAS
- [ ] **Botão WhatsApp Flutuante**: Presente em todas as páginas
- [ ] **Vídeo Hero**: Carregamento otimizado (WebM/MP4, lazy load)
- [ ] **Cards dos 4 Eixos**: Animações de entrada (scroll reveal)
- [ ] **Formulário de Contato**: Validação em tempo real, feedback visual
- [ ] **Formulário de Voluntários**: Validação e salvamento
- [ ] **Transparência**: Dados dinâmicos vindos do backend
- [ ] **Modo Escuro (Dark Mode)**: Alternância via localStorage (opcional)
- [ ] **PWA (Progressive Web App)**: Instalável no celular

---

### 🚀 5. PERFORMANCE E OTIMIZAÇÃO (Carga < 2s)
- [ ] Code Splitting com `React.lazy()` e `Suspense`
- [ ] Lazy Loading de imagens (atributo `loading="lazy"`)
- [ ] Imagens convertidas para WebP (com fallback JPG)
- [ ] Compressão de assets (vídeos, imagens)
- [ ] Remoção de bibliotecas desnecessárias (bundle analysis)
- [ ] Configuração de `manualChunks` no Vite (separar vendor)
- [ ] CDN ativada (Cloudflare Pages já tem CDN)
- [ ] Cache HTTP (via Cloudflare ou `.htaccess`)
- [ ] Prefetch de rotas principais
- [ ] Skeleton screens para conteúdo assíncrono
- [ ] Teste de performance no Lighthouse (alvo: > 95 em Performance)

---

### 🎯 6. SEO E ANALYTICS
- [ ] Meta tags dinâmicas (React Helmet)
- [ ] Títulos e descrições únicos por página
- [ ] Open Graph tags (para compartilhamento no WhatsApp/Facebook)
- [ ] Twitter Cards
- [ ] `sitemap.xml` gerado dinamicamente
- [ ] `robots.txt` configurado
- [ ] Schema.org (marcação para pessoa política)
- [ ] Google Analytics 4 (com `defer` para não bloquear carga)
- [ ] Meta Pixel (para rastreamento de anúncios)

---

### 📱 7. PWA E MOBILE
- [ ] Manifest.json configurado (ícones, cores, nome)
- [ ] Service Worker (cache de assets)
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Menu hambúrguer funcionando
- [ ] Botões grandes e fáceis de clicar (touch-friendly)

---

### ⚖️ 8. CONFORMIDADE LEGAL (TSE)
- [ ] Identificação clara de material de campanha eleitoral
- [ ] Nome completo e número do candidato (12.223) em todas as páginas
- [ ] Indicar uso de IA (música, imagens, textos) se aplicável
- [ ] Link para o Portal da Transparência da ALEPA
- [ ] Política de Privacidade (LGPD) para dados dos formulários

---

### 🔗 9. INTEGRAÇÃO COM CIDADE VIRTUAL
- [ ] Definir estrutura: subdomínio (`cidade.diegoserafim.com.br`) ou subpasta (`/cidade`)
- [ ] Configurar Nginx (proxy reverso) para direcionar tráfego
- [ ] Compartilhar banco de dados MongoDB (se aplicável)
- [ ] Linkar no menu do site (ex: "Conheça o Cidade Virtual")

---

### ☁️ 10. DEPLOY E HOSPEDAGEM
- [ ] Contratar VPS no Brasil (Hostinger, LetsCloud ou Napoleon)
- [ ] Configurar servidor: Node.js, MongoDB, Nginx
- [ ] Configurar SSL (Certbot / Let's Encrypt)
- [ ] Configurar domínio `diegoserafim.com.br` (apontar DNS)
- [ ] Fazer deploy do backend no VPS (via GitHub Actions ou manual)
- [ ] Fazer deploy do frontend na Cloudflare Pages (conectar ao GitHub)
- [ ] Configurar variáveis de ambiente no VPS e Cloudflare
- [ ] Configurar CI/CD (GitHub Actions):
  - [ ] Backend: ao push em `main`, fazer deploy no VPS
  - [ ] Frontend: ao push em `main`, publicar na Cloudflare Pages
- [ ] Testar carregamento em diferentes dispositivos
- [ ] Testar todos os formulários e integrações

---

### ✅ 11. PÓS-LANÇAMENTO
- [ ] Monitorar logs do servidor
- [ ] Acompanhar Google Analytics e Meta Pixel
- [ ] Atualizar notícias e agenda semanalmente
- [ ] Responder mensagens do formulário (via e-mail/WhatsApp)
- [ ] Manter Transparência atualizada (projetos de lei apresentados)
- [ ] Fazer backups do banco de dados (diário/semanal)

---

## 📊 LEGENDA

| Símbolo | Significado |
|:---:|:---|
| ☐ | Tarefa pendente |
| ✅ | Tarefa concluída |
| 🚧 | Tarefa em andamento |

---

## 🎯 PRÓXIMOS PASSOS

1. Escolha uma tarefa para começar
2. Crie uma branch `feature/nome-da-tarefa`
3. Desenvolva e faça commit
4. Abra um Pull Request para `develop`
5. Após aprovação, faça merge

**Bora construir o futuro do Pará! 🗳️🚀**