# 🎂 Claudycakes - Site Oficial

Site completo e elegante para a confeitaria Claudycakes, especializada em bolos de casamento e flores de açúcar artesanais.

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Vue Router** - Roteamento de páginas
- **Vite** - Build tool e dev server
- **CSS3** - Estilização com variáveis CSS e design responsivo

## 📋 Funcionalidades

✅ Navegação suave entre páginas
✅ Design responsivo (mobile, tablet e desktop)
✅ Paleta de cores rosa e branco elegante
✅ Botão flutuante do WhatsApp integrado
✅ Formulário de contato/orçamento completo
✅ Seção de portfólio com galeria
✅ Integração com Instagram (@claudycakes)
✅ Página institucional (Sobre)
✅ Página de serviços detalhada
✅ Animações suaves e transições

## 🎨 Assets Necessários

### **IMPORTANTE: Você precisa adicionar as seguintes imagens na pasta `public/`**

#### 📸 **Logo e Marca**
- **`public/logo.png`** 
  - Dimensões: 500x500px (formato quadrado)
  - Fundo transparente (PNG)
  - Seu logo da Claudycakes

- **`public/favicon.ico`**
  - Dimensões: 32x32px ou 64x64px
  - Ícone do site (aparece na aba do navegador)

---

#### 🏠 **Página Home**

- **`public/hero-bg.jpg`**
  - Dimensões: 1920x1080px (Full HD)
  - Imagem de fundo do hero (pode ser um bolo lindo ou flores de açúcar)
  - Alta resolução

- **`public/about-preview.jpg`**
  - Dimensões: 800x800px
  - Foto da confeiteira Claudia ou do ateliê
  - Boa iluminação

---

#### 👤 **Página Sobre (About)**

- **`public/confeiteira.jpg`**
  - Dimensões: 800x1000px (retrato)
  - Foto profissional da confeiteira
  - Fundo neutro ou no ateliê

---

#### 🛠️ **Página Serviços (Services)**

- **`public/service-wedding-cakes.jpg`**
  - Dimensões: 800x600px
  - Foto de um bolo de casamento lindo
  
- **`public/service-sugar-flowers.jpg`**
  - Dimensões: 800x600px
  - Close-up de flores de açúcar artesanais
  
- **`public/service-custom-projects.jpg`**
  - Dimensões: 800x600px
  - Foto de um projeto personalizado/exclusivo

---

#### 🖼️ **Página Portfólio**

- **Galeria (12 imagens):**
  - `public/portfolio/portfolio-1.jpg` até `portfolio-12.jpg`
  - Dimensões: 800x800px (quadradas)
  - Suas melhores fotos de bolos e flores de açúcar
  - Alta qualidade, bem iluminadas

- **Categorias (4 imagens):**
  - `public/category-wedding.jpg` (Bolos de casamento)
  - `public/category-sugar-flowers.jpg` (Flores de açúcar)
  - `public/category-birthday.jpg` (Aniversários)
  - `public/category-special.jpg` (Eventos especiais)
  - Dimensões: 800x600px cada

---

### 📐 **Especificações Técnicas das Imagens**

| Tipo | Dimensões Recomendadas | Formato | Tamanho Máximo |
|------|------------------------|---------|----------------|
| Logo | 500x500px | PNG (fundo transparente) | 200KB |
| Hero Background | 1920x1080px | JPG | 500KB |
| Fotos Produto | 800x600px | JPG | 300KB |
| Galeria Quadrada | 800x800px | JPG | 300KB |
| Fotos Retrato | 800x1000px | JPG | 400KB |

---

### ✏️ **Textos para Personalizar**

#### **Página Sobre (`src/views/About.vue`)**
Na linha ~32, substitua o texto placeholder pela história real da confeitaria:

```html
<!-- SUBSTITUA ESTE TRECHO COM A HISTÓRIA REAL -->
<p>
  A Claudycakes nasceu de uma paixão que começou na infância...
  [ADICIONE SUA HISTÓRIA AQUI]
</p>
```

**Tópicos para incluir:**
- Como começou a confeitaria
- Sua paixão por bolos de casamento
- Especialização em flores de açúcar
- Conquistas e marcos importantes
- O que te motiva no dia a dia

---

#### **Rodapé (`src/components/Footer.vue`)**
Na linha ~98, adicione seu nome ou mantenha o crédito:

```html
<p class="developer">Desenvolvido com 💖 por <a href="#" target="_blank">Seu Nome</a></p>
```

---

## 🛠️ Instalação e Execução

### **Pré-requisitos**
- Node.js versão 16 ou superior
- npm ou yarn

### **Passos:**

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em modo desenvolvimento:**
```bash
npm run dev
```

3. **Build para produção:**
```bash
npm run build
```

4. **Preview do build:**
```bash
npm run preview
```

O site estará disponível em: `http://localhost:3000`

---

## 📱 Integração Instagram

### **Opção 1: Widget Embed (Recomendado)**

Use uma dessas ferramentas para gerar um widget do Instagram:

1. **[EmbedSocial](https://embedsocial.com/)** (Gratuito até 500 visualizações/mês)
2. **[SnapWidget](https://snapwidget.com/)** (Plano gratuito disponível)
3. **[Juicer](https://www.juicer.io/)** (14 dias grátis)

**Como integrar:**
1. Acesse uma das ferramentas acima
2. Conecte sua conta @claudycakes
3. Copie o código embed gerado
4. Cole no arquivo `src/views/Portfolio.vue` na seção "Instagram Widget" (linha ~58)

### **Opção 2: Instagram Basic Display API**

Para desenvolvedores: Use a API oficial do Instagram
- [Documentação](https://developers.facebook.com/docs/instagram-basic-display-api)

---

## 🎨 Paleta de Cores

```css
--primary-pink: #E8B4C8       /* Rosa principal */
--secondary-pink: #F4D9E6     /* Rosa claro */
--accent-pink: #D4739B        /* Rosa destaque */
--dark-pink: #C95B8C          /* Rosa escuro */
--light-pink: #FFF5F9         /* Rosa muito claro */
--white: #FFFFFF              /* Branco */
--gold: #D4AF37               /* Dourado (detalhes) */
```

---

## 📞 Contatos Configurados

- **WhatsApp:** +55 81 99789-5740
- **Instagram:** [@claudycakes](https://www.instagram.com/claudycakes/)
- **Localização:** Igarassu - PE

---

## 📄 Estrutura de Arquivos

```
claudycakes-website/
├── public/                    # Assets estáticos
│   ├── logo.png              # Logo da marca
│   ├── favicon.ico           # Ícone do site
│   ├── hero-bg.jpg           # Background hero
│   ├── portfolio/            # Galeria de fotos
│   │   ├── portfolio-1.jpg
│   │   └── ...
│   └── ...                   # Outras imagens
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── WhatsAppButton.vue
│   ├── views/                # Páginas do site
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Services.vue
│   │   ├── Portfolio.vue
│   │   └── Contact.vue
│   ├── App.vue               # Componente principal
│   ├── main.js               # Entry point
│   └── style.css             # Estilos globais
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔧 Próximos Passos

### **Imediato:**
1. ✅ Adicionar todas as imagens necessárias na pasta `public/`
2. ✅ Personalizar textos na página Sobre
3. ✅ Testar formulário de contato
4. ✅ Integrar widget do Instagram

### **Futuro (Opcional):**
- [ ] Integrar com backend para salvar orçamentos
- [ ] Adicionar sistema de blog
- [ ] Implementar modo dark
- [ ] Adicionar mais idiomas
- [ ] SEO e otimizações avançadas

---

## 📝 Licença

© 2025 Claudycakes. Todos os direitos reservados.

---

## 💡 Dicas Importantes

### **Fotografias:**
- Use fotos de **alta qualidade** e bem iluminadas
- Mantenha um **estilo consistente** nas fotos
- Mostre **detalhes** das flores de açúcar
- Inclua fotos de **bastidores** se possível

### **Textos:**
- Seja **autêntica** na sua história
- Destaque seus **diferenciais**
- Use linguagem **acolhedora** e profissional
- Inclua **calls-to-action** claros

### **Performance:**
- Otimize as imagens antes de fazer upload (use [TinyPNG](https://tinypng.com/))
- Imagens não devem passar de 500KB cada
- Use formatos modernos: WebP quando possível

---

## 🆘 Precisa de Ajuda?

Se tiver dúvidas sobre:
- Como adicionar as imagens
- Como personalizar cores
- Como fazer deploy (colocar no ar)
- Qualquer outra questão

Entre em contato ou consulte a documentação do Vue.js: https://vuejs.org/

---

## 🌐 Deploy (Publicação)

### **Opções gratuitas recomendadas:**

1. **[Vercel](https://vercel.com/)** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **[Netlify](https://www.netlify.com/)**
   - Arraste e solte a pasta `dist` depois do build

3. **[GitHub Pages](https://pages.github.com/)**
   - Configure no repositório do GitHub

---

✨ **Bom trabalho e sucesso com a Claudycakes!** ✨
