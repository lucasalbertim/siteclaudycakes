# 🚀 GUIA RÁPIDO DE INÍCIO

## ⚡ **INÍCIO RÁPIDO EM 5 PASSOS**

### **Passo 1: Instalar Node.js**
1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (recomendada)
3. Execute o instalador
4. Clique em "Next" até finalizar

**Como verificar se instalou:**
Abra o PowerShell e digite:
```powershell
node --version
```
Deve mostrar algo como: `v20.x.x`

---

### **Passo 2: Instalar Dependências**
1. Abra o PowerShell
2. Navegue até a pasta do projeto:
```powershell
cd "C:\Users\lucas\OneDrive\Documentos\PROJETOS\Site claudycakes"
```
3. Instale as dependências:
```powershell
npm install
```
Aguarde alguns minutos... ☕

---

### **Passo 3: Adicionar Imagens**

Você precisa adicionar **21 imagens** na pasta `public/`

**Mínimo para testar (5 imagens essenciais):**
1. `public/logo.png` - Seu logo
2. `public/hero-bg.jpg` - Foto de fundo
3. `public/about-preview.jpg` - Foto para home
4. `public/confeiteira.jpg` - Sua foto
5. `public/portfolio/portfolio-1.jpg` - Uma foto de bolo

**Lista completa:** Veja arquivo `IMAGENS-NECESSARIAS.md`

**Não tem as fotos agora?**
Use fotos do seu Instagram temporariamente!

---

### **Passo 4: Executar o Site**
No PowerShell, digite:
```powershell
npm run dev
```

O site abrirá automaticamente em: **http://localhost:3000**

**Para parar o servidor:**
Pressione `Ctrl + C` no PowerShell

---

### **Passo 5: Personalizar**

**Texto da página Sobre:**
1. Abra: `src/views/About.vue`
2. Procure a linha ~32
3. Substitua o texto pela SUA história

**Outras personalizações:**
- Cores: `src/style.css` (linha 1-20)
- Horários: `src/components/Footer.vue` (linha 56)
- Rodapé: `src/components/Footer.vue` (linha 98)

---

## 🎯 **COMANDOS PRINCIPAIS**

```powershell
# Instalar (primeira vez apenas)
npm install

# Executar em desenvolvimento
npm run dev

# Parar o servidor
Ctrl + C

# Build para produção
npm run build
```

---

## ❓ **PROBLEMAS COMUNS**

### **Erro: "npm não é reconhecido"**
**Solução:** Node.js não instalado ou não está no PATH
- Reinstale o Node.js
- Reinicie o PowerShell

### **Erro: "Cannot find module"**
**Solução:** Dependências não instaladas
```powershell
npm install
```

### **Imagens não aparecem**
**Solução:** Verifique se:
- Imagens estão na pasta `public/`
- Nomes dos arquivos estão corretos (com extensão)
- Letras maiúsculas/minúsculas corretas

### **Site não abre**
**Solução:**
- Verifique se `npm run dev` está rodando
- Tente acessar manualmente: http://localhost:3000
- Verifique se porta 3000 está livre

---

## 📱 **TESTE EM MOBILE**

### **Opção 1: DevTools do navegador**
1. Pressione `F12` no navegador
2. Clique no ícone de celular (canto superior esquerdo)
3. Escolha um dispositivo (iPhone, Samsung, etc)

### **Opção 2: No seu celular**
1. Descubra o IP do seu computador
2. No celular, acesse: `http://SEU_IP:3000`
3. Teste navegação e formulários

---

## 🌐 **PUBLICAR O SITE (Deploy)**

### **Opção 1: Vercel (Recomendado)**
1. Crie conta: https://vercel.com
2. Instale CLI:
```powershell
npm install -g vercel
```
3. Faça deploy:
```powershell
vercel
```
4. Siga as instruções
5. Pronto! Seu site está online 🎉

### **Opção 2: Netlify**
1. Execute build:
```powershell
npm run build
```
2. Acesse: https://app.netlify.com/drop
3. Arraste a pasta `dist` para lá
4. Pronto! Site online 🎉

---

## 📋 **CHECKLIST ANTES DE PUBLICAR**

- [ ] Todas as imagens adicionadas
- [ ] Textos personalizados
- [ ] Testado em desktop
- [ ] Testado em mobile
- [ ] Links do WhatsApp funcionando
- [ ] Instagram configurado
- [ ] Formulário testado
- [ ] Sem erros no console (F12)

---

## 💡 **DICAS EXTRAS**

### **Atualizar o site:**
1. Faça as alterações nos arquivos
2. Salve (Ctrl+S)
3. O site atualiza automaticamente!

### **Adicionar mais fotos:**
1. Coloque na pasta `public/portfolio/`
2. Nomeie como: `portfolio-13.jpg`, `portfolio-14.jpg`...
3. Edite `src/views/Portfolio.vue` linha ~27

### **Mudar cores:**
1. Abra `src/style.css`
2. Edite as variáveis no topo (linhas 1-20)
3. Cores em hexadecimal (#E8B4C8)

---

## 🆘 **PRECISA DE MAIS AJUDA?**

📖 **Documentação completa:** `README.md`
📸 **Lista de imagens:** `IMAGENS-NECESSARIAS.md`
📊 **Resumo do projeto:** `RESUMO.md`

---

## ✅ **PRONTO!**

Agora você tem tudo para:
1. ✅ Rodar o site localmente
2. ✅ Personalizar conforme precisa
3. ✅ Testar tudo funciona
4. ✅ Publicar online

**Bom trabalho! 🎂✨**

---

*Qualquer dúvida, consulte os arquivos de documentação ou o código comentado!*
