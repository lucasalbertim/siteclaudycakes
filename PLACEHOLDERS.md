# 🖼️ PLACEHOLDERS TEMPORÁRIOS - COMO SUBSTITUIR

## ✅ **SITE FUNCIONANDO COM PLACEHOLDERS!**

O site agora está rodando com **placeholders temporários** (emojis e textos) no lugar das imagens.
Isso permite que você teste e use o site enquanto prepara as fotos reais.

---

## 📸 **O QUE FOI FEITO**

Substitui todas as referências de imagens por placeholders visuais:

### **Substituições Feitas:**

| Local | Placeholder | Imagem Real Necessária |
|-------|-------------|------------------------|
| Logo (Navbar/Footer) | 🎂 | `logo.png` (500x500px) |
| Hero Background | Gradiente rosa | `hero-bg.jpg` (1920x1080px) |
| Foto Preview (Home) | 👩‍🍳 | `about-preview.jpg` (800x800px) |
| Confeiteira (Sobre) | 👩‍🍳 | `confeiteira.jpg` (800x1000px) |
| Bolos Casamento | 💒 | `service-wedding-cakes.jpg` (800x600px) |
| Flores de Açúcar | 🌸 | `service-sugar-flowers.jpg` (800x600px) |
| Projetos Custom | 🎨 | `service-custom-projects.jpg` (800x600px) |
| Galeria (12 fotos) | 🎂 + número | `portfolio/portfolio-1.jpg` até `12.jpg` |
| Categoria Casamento | 💒 | `category-wedding.jpg` (800x600px) |
| Categoria Flores | 🌸 | `category-sugar-flowers.jpg` (800x600px) |
| Categoria Aniversário | 🎉 | `category-birthday.jpg` (800x600px) |
| Categoria Especial | ✨ | `category-special.jpg` (800x600px) |

---

## 🔄 **COMO SUBSTITUIR PELAS FOTOS REAIS**

### **Opção 1: Adicionar Imagens Reais** (Recomendado)

1. **Prepare suas fotos** seguindo as dimensões em `IMAGENS-NECESSARIAS.md`
2. **Adicione na pasta `public/`** com os nomes exatos listados acima
3. **Reverta os placeholders** (veja instruções abaixo)
4. **Teste novamente** com `npm run dev`

### **Opção 2: Manter Placeholders Temporariamente**

Você pode deixar os placeholders e ir adicionando fotos gradualmente:
- Site continua funcionando perfeitamente
- Substitua uma imagem de cada vez
- Teste após cada adição

---

## 🔧 **REVERTENDO PARA USAR IMAGENS REAIS**

Quando tiver as imagens prontas, você precisa reverter as mudanças nos arquivos Vue.

### **Arquivos que precisam ser alterados:**

#### **1. src/components/Navbar.vue** (Logo)
```vue
<!-- SUBSTITUIR ESTA LINHA: -->
<div class="logo-placeholder">🎂</div>

<!-- POR: -->
<img src="/logo.png" alt="Claudycakes Logo" class="logo-img">
```

#### **2. src/components/Footer.vue** (Logo)
```vue
<!-- SUBSTITUIR: -->
<div class="footer-logo-placeholder">🎂</div>

<!-- POR: -->
<img src="/logo.png" alt="Claudycakes" class="footer-logo-img">
```

#### **3. src/views/Home.vue** (Foto Preview)
```vue
<!-- SUBSTITUIR: -->
<div class="placeholder-image-home">
  <span>👩‍🍳</span>
  <p>Foto Preview</p>
  <small>800x800px</small>
</div>

<!-- POR: -->
<img src="/about-preview.jpg" alt="Confeiteira Claudycakes">
```

#### **4. src/views/About.vue** (Foto Confeiteira)
```vue
<!-- SUBSTITUIR: -->
<div class="placeholder-confeiteira">
  <span>👩‍🍳</span>
  <p>Foto da Confeiteira</p>
  <small>800x1000px</small>
</div>

<!-- POR: -->
<img src="/confeiteira.jpg" alt="Claudia - Confeiteira">
```

#### **5. src/views/Services.vue** (3 fotos de serviços)
```vue
<!-- SUBSTITUIR CADA UM DOS 3 PLACEHOLDERS: -->
<div class="placeholder-service">
  <span>💒</span> <!-- ou 🌸 ou 🎨 -->
  <p>Nome do Serviço</p>
  <small>800x600px</small>
</div>

<!-- POR: -->
<img src="/service-wedding-cakes.jpg" alt="Bolos de Casamento">
<!-- ou -->
<img src="/service-sugar-flowers.jpg" alt="Flores de Açúcar">
<!-- ou -->
<img src="/service-custom-projects.jpg" alt="Projetos Personalizados">
```

#### **6. src/views/Portfolio.vue** (Galeria + Categorias)

**Galeria (12 fotos):**
```vue
<!-- SUBSTITUIR: -->
<div class="placeholder-image">
  <span>🎂</span>
  <p>Foto {{ n }}</p>
  <small>800x800px</small>
</div>

<!-- POR: -->
<img :src="`/portfolio/portfolio-${n}.jpg`" :alt="`Bolo Claudycakes ${n}`">
```

**Categorias (4 fotos):**
```vue
<!-- SUBSTITUIR CADA PLACEHOLDER: -->
<div class="category-image placeholder-category">
  <span>💒</span> <!-- ou 🌸 🎉 ✨ -->
  <p>Nome Categoria</p>
</div>

<!-- POR: -->
<div class="category-image">
  <img src="/category-wedding.jpg" alt="Bolos de Casamento">
</div>
<!-- Repetir para as 4 categorias -->
```

---

## 📝 **SCRIPT DE SUBSTITUIÇÃO RÁPIDA**

Quando tiver TODAS as imagens, você pode usar este guia de busca/substituição:

### **No VS Code:**
1. Pressione `Ctrl + H` (buscar e substituir)
2. Use as substituições abaixo em cada arquivo
3. Salve e teste

**OU** restaure os arquivos originais salvos no Git (se você usou Git)

---

## ⚡ **TESTANDO O SITE AGORA**

Execute:
```powershell
npm run dev
```

O site deve abrir perfeitamente com todos os placeholders funcionando! 🎉

**Testes a fazer:**
- ✅ Navegação entre páginas
- ✅ Menu mobile (responsive)
- ✅ Botão WhatsApp
- ✅ Formulário de contato
- ✅ Todos os links
- ✅ Scroll suave

---

## 🎨 **VANTAGENS DOS PLACEHOLDERS**

✅ Site funciona **imediatamente**
✅ Você pode **testar todas funcionalidades**
✅ **Visualiza o layout** antes das fotos
✅ Pode **publicar temporariamente** para teste
✅ **Adiciona fotos gradualmente** conforme ficam prontas
✅ Cliente pode **ver o site funcionando** antes

---

## 📸 **PRIORIDADE DE FOTOS**

Se quiser adicionar gradualmente, esta é a ordem recomendada:

1. **Logo** (`logo.png`) - Identidade visual
2. **Hero Background** (`hero-bg.jpg`) - Primeira impressão
3. **Galeria Portfolio** (12 fotos) - Mostra trabalhos
4. **Foto Confeiteira** (`confeiteira.jpg`) - Credibilidade
5. **Serviços** (3 fotos) - Detalhamento
6. **Categorias** (4 fotos) - Organização
7. **About Preview** - Complemento

---

## 🚀 **PRÓXIMOS PASSOS**

1. **Agora:** Teste o site com placeholders
2. **Depois:** Prepare fotos conforme `IMAGENS-NECESSARIAS.md`
3. **Então:** Adicione fotos na pasta `public/`
4. **Finalmente:** Reverta placeholders para usar imagens reais
5. **Publicar:** Deploy do site completo!

---

## 💡 **DICA PRO**

Você pode **publicar o site com placeholders** para:
- Testar em produção
- Mostrar para clientes/amigos
- Coletar feedback sobre layout
- Depois substituir fotos gradualmente

Muitos sites profissionais fazem isso durante desenvolvimento!

---

## ❓ **DÚVIDAS COMUNS**

**P: O site ficará feio com placeholders?**
R: Não! Os placeholders têm as cores do site e ficam visualmente agradáveis.

**P: Posso publicar assim?**
R: Pode para teste, mas não recomendado para produção final.

**P: Como sei quais fotos faltam?**
R: Consulte `IMAGENS-NECESSARIAS.md` - tem checklist completo.

**P: E se eu só tiver algumas fotos?**
R: Adicione as que tiver, deixe o resto com placeholder. Funciona!

---

## ✅ **RESUMO**

- ✅ Site funcionando SEM erros
- ✅ Placeholders visuais no lugar de imagens
- ✅ Pode testar TODAS funcionalidades
- ✅ Adicione fotos quando estiverem prontas
- ✅ Reverta placeholders conforme guia acima

---

**Agora você pode rodar e testar o site perfeitamente! 🎉**

*Execute `npm run dev` e veja a mágica acontecer!*
