<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <div class="hero-text fade-in-up">
          <h1>Transformando Sonhos em <span class="highlight">Realidade Doce</span></h1>
          <p class="hero-subtitle">
            Especialistas em bolos de casamento e flores de açúcar artesanais.
            Cada detalhe é criado com amor e perfeição para o seu grande dia.
          </p>
          <div class="hero-buttons">
            <router-link to="/contato" class="btn btn-primary">Faça seu Orçamento</router-link>
            <router-link to="/portfolio" class="btn btn-secondary">Ver Portfólio</router-link>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <!-- Destaques -->
    <section class="highlights">
      <div class="container">
        <div class="highlights-grid">
          <div class="highlight-card fade-in">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3>Feito com Amor</h3>
            <p>Cada bolo é criado com dedicação e carinho especial para tornar seu momento único.</p>
          </div>

          <div class="highlight-card fade-in">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Qualidade Premium</h3>
            <p>Utilizamos apenas ingredientes selecionados e técnicas refinadas de confeitaria.</p>
          </div>

          <div class="highlight-card fade-in">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Flores Artesanais</h3>
            <p>Especialistas em flores de açúcar realistas que encantam pela beleza e perfeição.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre Rápido -->
    <section class="about-preview">
      <div class="container">
        <div class="about-content">
          <div class="about-image fade-in">
            <SmartImage src="/about-preview.jpg" alt="Preview sobre" :icon="'👩‍🍳'" title="Foto Preview" sizeLabel="800x800px" wrapperClass="placeholder-image-home" placeholderClass="placeholder-image-home" />
            <div class="image-decoration"></div>
          </div>
          <div class="about-text fade-in-up">
            <h2 class="section-title">Conheça a <span class="highlight">Claudycakes</span></h2>
            <p>
              Com anos de experiência e paixão pela confeitaria, a Claudycakes nasceu do sonho
              de criar bolos únicos que marcam os momentos mais especiais da vida.
            </p>
            <p>
              Especializada em bolos de casamento e na arte de criar flores de açúcar,
              cada peça é trabalhada com extremo cuidado e atenção aos detalhes,
              garantindo que seu evento seja inesquecível.
            </p>
            <router-link to="/sobre" class="btn btn-primary">Saiba Mais</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Serviços -->
    <section class="services-preview">
      <div class="container">
        <h2 class="section-title">Nossos <span class="highlight">Serviços</span></h2>
        <div class="services-grid">
          <div class="service-card card fade-in-up">
            <div class="service-icon">🎂</div>
            <h3>Bolos de Casamento</h3>
            <p>Bolos personalizados que refletem a personalidade e estilo do casal.</p>
          </div>

          <div class="service-card card fade-in-up">
            <div class="service-icon">🌸</div>
            <h3>Flores de Açúcar</h3>
            <p>Flores artesanais perfeitas em cada detalhe, indistinguíveis das naturais.</p>
          </div>

          <div class="service-card card fade-in-up">
            <div class="service-icon">🎨</div>
            <h3>Projetos Personalizados</h3>
            <p>Criamos bolos exclusivos seguindo sua visão e estilo único.</p>
          </div>

          <div class="service-card card fade-in-up">
            <div class="service-icon">✨</div>
            <h3>Eventos Especiais</h3>
            <p>Bolos para aniversários, batizados, formaturas e celebrações.</p>
          </div>
        </div>
        <div class="center-btn">
          <router-link to="/servicos" class="btn btn-secondary">Ver Todos os Serviços</router-link>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Pronta para Criar seu Bolo dos Sonhos?</h2>
          <p>Entre em contato e vamos juntas planejar o bolo perfeito para o seu grande dia!</p>
          <router-link to="/contato" class="btn btn-primary btn-large">Solicitar Orçamento</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmartImage from '../components/SmartImage.vue'

export default {
  name: 'Home',
  components: { SmartImage },
  mounted() {
    // Adicionar padding-top para compensar a navbar fixa
    document.querySelector('.hero').style.marginTop = '0';
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(232, 180, 200, 0.1), rgba(244, 217, 230, 0.2)), 
              url('/hero-bg.jpg') center/cover no-repeat;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 245, 249, 0.85));
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 100px 20px 20px;
}

.hero-text h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--accent-pink);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

/* Highlights Section */
.highlights {
  padding: 80px 20px;
  background: var(--white);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.highlight-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(212, 115, 155, 0.15);
}

.icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  background: linear-gradient(135deg, var(--secondary-pink), var(--light-pink));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-pink);
}

.highlight-card h3 {
  color: var(--accent-pink);
  margin-bottom: 15px;
}

/* About Preview */
.about-preview {
  padding: 100px 20px;
  background: linear-gradient(135deg, var(--light-pink), var(--white));
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  align-items: center;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.placeholder-image-home {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  border-radius: 20px;
  gap: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.placeholder-image-home span {
  font-size: 5rem;
}

.placeholder-image-home p {
  color: var(--accent-pink);
  font-weight: 600;
  margin: 0;
  font-size: 1.3rem;
}

.placeholder-image-home small {
  color: var(--text-light);
  font-size: 0.9rem;
}

.image-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--secondary-pink), var(--accent-pink));
  border-radius: 20px;
  opacity: 0.3;
  z-index: -1;
}

.about-text p {
  margin-bottom: 20px;
  line-height: 1.8;
}

/* Services Preview */
.services-preview {
  padding: 100px 20px;
  background: var(--white);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.service-card {
  text-align: center;
  padding: 40px 25px;
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.service-card h3 {
  color: var(--accent-pink);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.center-btn {
  text-align: center;
  margin-top: 40px;
}

/* CTA Section */
.cta {
  padding: 100px 20px;
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
  color: var(--white);
  text-align: center;
}

.cta-content h2 {
  color: var(--white);
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 20px;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-large {
  padding: 18px 50px;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 100vh;
    padding: 120px 20px 60px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-buttons .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .about-content {
    gap: 40px;
  }
  
  .image-decoration {
    display: none;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
