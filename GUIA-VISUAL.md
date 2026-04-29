# 🎨 GUIA VISUAL - REFERÊNCIAS DE DESIGN

## 📐 **DIMENSÕES DAS IMAGENS**

### **Logo (logo.png)**
```
┌─────────────┐
│             │
│    LOGO     │  500x500px
│   CLAUDY    │  PNG transparente
│   CAKES     │
│             │
└─────────────┘
```

### **Hero Background (hero-bg.jpg)**
```
┌───────────────────────────────────────┐
│                                       │
│     FOTO PANORÂMICA DE BOLO           │  1920x1080px
│     OU FLORES DE AÇÚCAR               │  Landscape
│                                       │
└───────────────────────────────────────┘
```

### **Galeria Portfolio (800x800px cada)**
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│  BOLO 1  │  │  BOLO 2  │  │  BOLO 3  │
│          │  │          │  │          │
│ 800x800  │  │ 800x800  │  │ 800x800  │
│          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘
```

---

## 🎨 **PALETA DE CORES**

### **Rosa Principal (#E8B4C8)**
```
██████████  Usar em: Títulos principais, botões primários
```

### **Rosa Claro (#F4D9E6)**
```
██████████  Usar em: Fundos de seções, cards
```

### **Rosa Destaque (#D4739B)**
```
██████████  Usar em: Links, highlights, hover
```

### **Rosa Escuro (#C95B8C)**
```
██████████  Usar em: Textos importantes, gradientes
```

### **Branco (#FFFFFF)**
```
██████████  Usar em: Texto sobre rosa, cards principais
```

---

## 📱 **LAYOUT RESPONSIVO**

### **Desktop (1200px+)**
```
┌─────────────────────────────────────────┐
│  LOGO          MENU    MENU    CONTATO  │ ← Navbar
├─────────────────────────────────────────┤
│                                         │
│           HERO SECTION                  │
│         [TÍTULO GRANDE]                 │
│         [Botões]                        │
│                                         │
├─────────────────────────────────────────┤
│  [CARD] [CARD] [CARD]                  │ ← 3 colunas
├─────────────────────────────────────────┤
│  [IMAGEM]    [TEXTO SOBRE]             │ ← 2 colunas
└─────────────────────────────────────────┘
```

### **Mobile (< 768px)**
```
┌──────────────┐
│ 🍔 LOGO      │ ← Navbar compacto
├──────────────┤
│              │
│    HERO      │
│   SECTION    │
│   [Título]   │
│   [Botões]   │
│              │
├──────────────┤
│   [CARD]     │
├──────────────┤
│   [CARD]     │ ← 1 coluna
├──────────────┤
│   [CARD]     │
├──────────────┤
│   [IMAGEM]   │
│   [TEXTO]    │ ← Empilhado
└──────────────┘
```

---

## 📸 **SUGESTÕES DE FOTOS**

### **Hero Background - O que funciona bem:**
✅ Bolo de casamento completo (visto de frente)
✅ Close-up de flores de açúcar
✅ Mesa de bolo decorada para casamento
✅ Bolo com luz natural (golden hour)

❌ Evitar:
- Fotos muito escuras
- Muito zoom (pixeladas)
- Fundos confusos/desorganizados

### **Galeria Portfolio - Dicas:**
✅ Diversos ângulos do mesmo bolo
✅ Close-up de detalhes (flores, texturas)
✅ Bolo completo em contexto (festa)
✅ Processo de criação (opcional)

### **Foto da Confeiteira - Ideal:**
✅ Retrato profissional
✅ Sorrindo naturalmente
✅ Boa iluminação
✅ Fundo neutro ou no ateliê
✅ Vestindo avental ou roupa profissional

---

## 🎯 **HIERARQUIA VISUAL**

### **Home Page:**
```
1. HERO (maior destaque)
   ↓
2. Destaques (3 cards)
   ↓
3. Sobre (preview)
   ↓
4. Serviços (grid)
   ↓
5. CTA Final
```

### **Tipografia:**
```
H1: 64px (Desktop) / 40px (Mobile)  ← Títulos Hero
H2: 48px (Desktop) / 32px (Mobile)  ← Títulos Seção
H3: 32px (Desktop) / 24px (Mobile)  ← Subtítulos
P:  18px (Desktop) / 16px (Mobile)  ← Texto corpo
```

---

## 🎨 **EXEMPLOS DE SEÇÕES**

### **Card de Serviço:**
```
┌─────────────────┐
│                 │
│       🎂        │ ← Emoji/Ícone
│                 │
│  NOME SERVIÇO   │ ← H3 (rosa destaque)
│                 │
│  Descrição do   │ ← P (cinza claro)
│  serviço aqui   │
│                 │
└─────────────────┘
```

### **Depoimento:**
```
┌─────────────────────────┐
│  "                      │ ← Aspas decorativas
│                         │
│  Texto do depoimento    │
│  sobre o trabalho...    │
│                         │
│  - NOME CLIENTE         │
│    Evento - Data        │
│                         │
│  ★★★★★                  │ ← 5 estrelas
└─────────────────────────┘
```

### **Formulário:**
```
┌────────────────────┐
│ Nome Completo *    │ ← Label
│ ┌────────────────┐ │
│ │ Seu nome       │ │ ← Input
│ └────────────────┘ │
│                    │
│ WhatsApp *         │
│ ┌────────────────┐ │
│ │ (00) 0000-0000 │ │
│ └────────────────┘ │
│                    │
│ [ENVIAR BOTÃO]     │
└────────────────────┘
```

---

## 🔄 **ANIMAÇÕES E TRANSIÇÕES**

### **Hover em Botões:**
```
Estado Normal:
┌──────────────┐
│  SOLICITAR   │
│  ORÇAMENTO   │
└──────────────┘

Hover (mouse em cima):
┌──────────────┐
│  SOLICITAR   │ ← Sobe 2px
│  ORÇAMENTO   │ ← Sombra maior
└──────────────┘  ← Efeito smooth
```

### **Cards:**
```
Normal:        Hover:
┌────┐        ┌────┐
│    │        │    │ ← Sobe 5px
│    │   →    │    │ ← Sombra rosa
└────┘        └────┘
```

---

## 💡 **DICAS DE FOTOGRAFIA**

### **Iluminação:**
```
✅ BOM:                ❌ EVITAR:
   │☀️ Luz Natural        │💡 Luz artificial forte
   │   (janela)           │   (flash direto)
   ↓                     ↓
  🎂 Bolo               🎂 Bolo
(cores reais)         (cores alteradas)
```

### **Ângulos Sugeridos:**

**Para Bolos Inteiros:**
- Frontal (0°)
- 45° (mostra profundidade)
- Lateral (mostra camadas)

**Para Flores:**
- Close-up (macro)
- Grupo de flores
- Detalhes das pétalas

---

## 📐 **GRID SYSTEM**

### **Espaçamento Padrão:**
```
Seções:        80px (Desktop) / 50px (Mobile)
Entre cards:   30px
Padding cards: 40px / 30px
Margens:       20px
```

### **Container Width:**
```
Desktop:  1200px máximo
Tablet:   768px - 1199px
Mobile:   < 768px
```

---

## 🎯 **CALL-TO-ACTION (CTA)**

### **Hierarquia de Botões:**

**Primário (rosa gradiente):**
- "Solicitar Orçamento"
- "Fazer Pedido"
- "Entrar em Contato"

**Secundário (branco com borda):**
- "Ver Portfólio"
- "Saiba Mais"
- "Ver Galeria"

```
[PRIMÁRIO] [SECUNDÁRIO]
     ↓          ↓
  Ação    Informação
  Forte      Extra
```

---

## 📱 **INSTAGRAM INTEGRATION**

### **Opções de Exibição:**

**Opção 1: Grid de Fotos**
```
┌───┬───┬───┬───┐
│ 📷│ 📷│ 📷│ 📷│
├───┼───┼───┼───┤
│ 📷│ 📷│ 📷│ 📷│
├───┼───┼───┼───┤
│ 📷│ 📷│ 📷│ 📷│
└───┴───┴───┴───┘
[Seguir no Instagram]
```

**Opção 2: Carrossel**
```
← │ 📷 │ 📷 │ 📷 │ →
  └───┴───┴───┘
```

---

## ✨ **MICRO-INTERAÇÕES**

### **Botão WhatsApp Flutuante:**
```
Estado Normal:       Hover:
    💬                 💬
   ○○○       →       ⭕⭕⭕
(pulsando)         (maior)
                 + tooltip
```

### **Menu Mobile:**
```
Fechado:      Aberto:
☰            ┌────────────┐
             │ HOME       │
             │ SOBRE      │
             │ SERVIÇOS   │
             │ PORTFÓLIO  │
             │ CONTATO    │
             └────────────┘
```

---

## 🎨 **EXEMPLOS DE USO DAS CORES**

### **Hero Section:**
```
Background: Branco (#FFFFFF)
Overlay: Rosa claro semi-transparente
Título: Rosa destaque (#D4739B)
Texto: Cinza (#6B6B6B)
Botão: Gradiente rosa
```

### **Cards:**
```
Background: Branco (#FFFFFF)
Border: Rosa claro (#F4D9E6)
Ícone: Rosa principal (#E8B4C8)
Título: Rosa destaque (#D4739B)
Texto: Cinza (#6B6B6B)
```

---

## 📊 **CHECKLIST VISUAL**

Antes de publicar, verifique:

- [ ] Todas as imagens carregam
- [ ] Cores consistentes em todo site
- [ ] Textos legíveis (contraste bom)
- [ ] Botões com hover funcionando
- [ ] Animações suaves (não bruscas)
- [ ] Espaçamentos uniformes
- [ ] Alinhamentos corretos
- [ ] Mobile funcionando bem
- [ ] Sem texto cortado
- [ ] Logo nítido em todos tamanhos

---

## 🎯 **OBJETIVO FINAL**

Criar uma experiência visual que transmita:

✨ **Elegância** - Design sofisticado
💖 **Carinho** - Cores suaves e acolhedoras
🎨 **Arte** - Destaque para trabalhos artesanais
🏆 **Profissionalismo** - Layout limpo e organizado
✅ **Confiança** - Informações claras e acessíveis

---

*Use este guia como referência para manter consistência visual em todo o site!*
